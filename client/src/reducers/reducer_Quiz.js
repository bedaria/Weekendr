import QuizData from './QuizData';


export default function(state = QuizData, action) {
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return {...state, quizAnswers: action.payload.answers, questionIndex: action.payload.questionIndex};
		default: return state
	}
	return state;
}

