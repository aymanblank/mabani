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

export const user = (state=null, action) => {
  switch(action.type) {
    case C.SET_LOGGED_IN_USER :
      return action.payload;
  	default: 
  		return state
  }
}

export const tenders = (state=[], action) => {
  const newTenders = Object.assign([], state);
  switch(action.type) {
    case C.SET_TENDERS :
      return action.payload;
    case C.APPROVE_TENDER :
      const foundApproved = newTenders.filter(t => t.id === action.payload);
      if(foundApproved && foundApproved[0]){
        foundApproved[0].approved = true;
      }
      return newTenders;
      break;
    case C.DECLINE_TENDER :
      const foundDeclined = newTenders.filter(t => t.id === payload.id);
      if(foundDeclined && foundDeclined[0]){
        foundDeclined[0].declined = true;
      }
      return newTenders;
      break;
  	default: 
  		return state
  }
}

export default combineReducers({
  connectionStatus,
  user,
  tenders,
})




