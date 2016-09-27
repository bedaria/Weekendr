import {
  LOG_IN,
  LOG_OUT,
  AUTHORIZED,
  UNAUTHORIZED
} from '../actions/actionTypes';

const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {...state, username: action.payload.username, firstName: action.payload.firstName}
    case LOG_OUT:
      return { initialState }
    case AUTHORIZED:
      return {...state, email: action.payload.email, lastName: action.payload.lastName }
    case UNAUTHORIZED:
      return {...state, error: action.payload.error }
    default: return state
  }
}

