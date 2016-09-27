import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  LOG_IN,
  AUTHORIZED,
  UNAUTHORIZED
} from './actionTypes';

export function updateUserInfo(username, firstName) {
  return {
    type: LOG_IN,
    payload: {
      firstName,
      username
    }
  }
}

export function authorizeUser(token) {
  return dispatch => {
    axios.post('/api/authorize', {
      token: token
    })
    .then(userInfo => {
      if(userInfo.data.error){
        dispatch({
          type: UNAUTHORIZED,
          payload: {}
        })
        {browserHistory.push('/login')}
      }
      else
        dispatch({
          type: AUTHORIZED,
          payload: userInfo.data
        })
    })
    .catch(err => console.log("POST /authorize failed: ", err))
  }
}