import QuizData from './UserInputData';

export default function(state = UserInputData, action) {
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return {...state, userInputAnswers: action.payload.answers, userInputIndex: action.payload.userInputIndex};
		default: return state
	}
	return state;
}

