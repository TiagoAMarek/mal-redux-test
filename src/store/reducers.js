import { combineReducers } from 'redux'
import TopAnimesReducer from './TopAnimes/reducer'

export default combineReducers({ topAnimes: TopAnimesReducer })
