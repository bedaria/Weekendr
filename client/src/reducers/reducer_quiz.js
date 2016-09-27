import { ANSWER_SELECTED } from '../actions/actionTypes';
import quizData from './quizData';

export default (state = quizData, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return {
        ...state,
        quizAnswers: action.payload.answers,
        questionIndex: action.payload.questionIndex
      };
    default:
      return state;
  }
}
