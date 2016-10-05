import { SELECTED_CITY } from '../actions/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_CITY:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
