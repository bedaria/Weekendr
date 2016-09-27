import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  AUTHORIZED,
  UNAUTHORIZED
} from './actionTypes';

export function updateUserInfo(username, firstName) {
  return ({
    type: LOG_IN,
    payload: { username, firstName }
  })
}

export function authorizeUser() {
  return dispatch => {
    axios.post('/api/authorize', { token: localStorage.token })
    .then(userInfo => {
      if(userInfo.data.error)
        dispatch({ type: UNAUTHORIZED, payload: {} })
      else
        dispatch({ type: AUTHORIZED, payload: { email: userInfo.data.email,
                                                lastName: userInfo.data.lastName }})
    })
    .catch(err => {
      console.log("POST /authorize failed: ", err)
      dispatch({ type: UNAUTHORIZED, payload: {}, error: "Please try again"})
    })
  }
}

export function createUser(userName, firstName, lastName, email, password) {
  return dispatch => {
    axios.post('/api/createUser', {
      userName, firstName, lastName, email, password
    })
    .then(resp => {
      if(resp.data.error)
        dispatch({ type: UNAUTHORIZED, payload: {error: resp.data.error} })
      else {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('username', resp.data.userName)
        localStorage.setItem('firstName', resp.data.firstName)
        dispatch({ type: LOG_IN, payload: { userName,
                                            firstName,
                                            error: null}})
      }
    })
    .catch(err => {
      console.log("POST /createUser failed", err)
      dispatch({ type: UNAUTHORIZED, payload: {}, error: "Please try again"})
    })
  }
}

export function login(username, password) {
  return dispatch => {
    axios.post('/api/signin', {
      username, password
    })
    .then(resp => {
      if(resp.data.error)
        dispatch({type: UNAUTHORIZED, payload: {error: resp.data.error}})
      else {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('username', resp.data.userName)
        localStorage.setItem('firstName', resp.data.firstName)
        dispatch({ type: AUTHORIZED, payload: {username: resp.data.username,
                                               firstName: resp.data.firstName,
                                               error: null}})
      }
    })
    .catch( err => {
      console.log("POST /signin failed: ", err)
      dispatch({ type: UNAUTHORIZED, payload: {}, error: "Please try again"})
    })
  }
}

export function logOut() {
  return dispatch => {
    localStorage.removeItem('firstName')
    localStorage.removeItem('username')
    localStorage.removeItem('token')

    dispatch({
      type: LOG_OUT,
      payload: {}
    })

  }
}