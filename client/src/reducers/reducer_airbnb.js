import { AIRBNB_LISTINGS } from '../actions/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case AIRBNB_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };
    default:
      return state;
  }
}
