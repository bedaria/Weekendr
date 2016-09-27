import { RECEIVED_USER_INPUT_DATA } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVED_USER_INPUT_DATA:
      return {
        ...state,
        userInputForm: action.payload
      };
    default:
      return state;
  }
}
