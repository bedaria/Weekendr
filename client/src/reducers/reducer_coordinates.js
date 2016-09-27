import { LAT_LONG } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LAT_LONG:
      var item = {
        ...state,
        coordinates: action.payload && action.payload
      };
      return item;
    default:
      return state;
  }
}
