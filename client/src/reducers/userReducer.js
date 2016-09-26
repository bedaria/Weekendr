import {LOG_IN} from '../actions/actionTypes';

const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  isLoggedIn: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {...state,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        isLoggedIn: action.payload.isLoggedIn
      }
    default: return state
  }
}