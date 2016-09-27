import { ANSWER_SELECTED } from '../actions/actionTypes';
import userInputData from './userInputData';

export default (state = userInputData, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return {
        ...state,
        userInputAnswers: action.payload.answers,
        userInputIndex: action.payload.userInputIndex
      };
    default:
      return state;
  }
}
