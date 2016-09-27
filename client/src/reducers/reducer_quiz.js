import quizData from './quizData';
import { ANSWER_SELECTED } from '../actions/actionTypes';

export default function(state = quizData, action) {
  switch(action.type) {
    case ANSWER_SELECTED:
      return {
        ...state,
        quizAnswers: action.payload.answers,
        questionIndex: action.payload.questionIndex
      };
    default:
      return state;
  }
  return state;
}
