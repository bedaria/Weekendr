import QuizListData from './QuizListData';
import { ANSWER_SELECTED } from '../actions/actionTypes'

export default function(state = QuizListData, action) {
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return {...state, quizAnswers: action.payload.answers, questionIndex: action.payload.questionIndex};
		default: return state
	}
	return state;
}

