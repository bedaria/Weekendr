import {LOG_IN} from './actionTypes';

export function updateUserInfo(username, lastName, firstName, email, password, isLoggedIn) {
  return {
    type: LOG_IN,
    payload: {
      firstName,
      lastName,
      username,
      email,
      isLoggedIn
    }
  }
}