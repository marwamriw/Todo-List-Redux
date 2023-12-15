// combine all the reducers 
import {combineReducers} from'redux'
import addReducer from './addReducer'

export default combineReducers({addReducer})