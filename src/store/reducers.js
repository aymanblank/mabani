import C from './constants'
import { combineReducers } from 'redux'

export const connectionStatus = (state=false, action) => {
  switch(action.type) {
    case C.SET_CONNECTION_STATUS :
    	return action.payload;
  	default: 
  		return state
  }
}

export default combineReducers({
  connectionStatus,
})




