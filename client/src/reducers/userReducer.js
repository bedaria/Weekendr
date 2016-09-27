import {
  LOG_IN,
  AUTHORIZED,
  UNAUTHORIZED
} from '../actions/actionTypes';

const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {...state,
        username: action.payload.username,
        firstName: action.payload.firstName
      }
    case AUTHORIZED:
      return {...state,
        email: action.payload.email,
        lastname: action.payload.lastName
      }
    case UNAUTHORIZED:
      return state
    default: return state
  }
}

