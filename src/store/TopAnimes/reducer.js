import { actions } from './actions'

const TopAnimesReducer = (state = [], action) => {

  console.log('Action', action)

  switch(action.type) {
    case actions.FETCH_TOP_ANIMES_STARTED:
      return [...state]

    case actions.FETCH_TOP_ANIMES_SUCCESS:
      return [...action.payload]

    case actions.FETCH_TOP_ANIMES_FAIL:
      return [...state]

    default:
      return state
  }
}

export default TopAnimesReducer
