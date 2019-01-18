import api from './api'

export const actions = {
  FETCH_TOP_ANIMES_STARTED: 'FETCH_TOP_ANIMES_STARTED',
  FETCH_TOP_ANIMES_SUCCESS: 'FETCH_TOP_ANIMES_SUCCESS',
  FETCH_TOP_ANIMES_FAIL: 'FETCH_TOP_ANIMES_FAIL',
}

export const fetchTopAnimesSuccess = (topAnimes) => ({
  type: actions.FETCH_TOP_ANIMES_SUCCESS,
  payload: topAnimes,
})

export const fetchTopAnimesFail = () => ({
  type: actions.FETCH_TOP_ANIMES_FAIL,
})

export const fetchTopAnimesStarted = () => ({
  type: actions.FETCH_TOP_ANIMES_STARTED,
})

export const fetchTopAnimes = () => {
  return async dispatch => {
    dispatch(fetchTopAnimesStarted())

    try {
      const { data: { top } } = await api.getTopAnimes()
      dispatch(fetchTopAnimesSuccess(top))
    } catch(error) {
      dispatch(fetchTopAnimesFail())
    }
  }
}

