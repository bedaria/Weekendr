import { LOG_IN } from '../actions/actionTypes';

const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      };
    default:
      return state;
  }
}
