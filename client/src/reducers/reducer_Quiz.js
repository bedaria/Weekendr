import QuizData from './QuizData';


export default function(state = QuizData, action) {
	console.log('inside reducer_active_Question state is : ',state)
	console.log('inside reducer_active_Question action is: ', action)
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return {...state, quizAnswers: action.payload.answers, questionIndex: action.payload.questionIndex};
		// case 'INCREMENT_INDEX':
		// console.log('we are inside INCREMENT_INDEX')
		// return {questionIndex: action.payload.index}
		default: return state
	}
	return state;
}

