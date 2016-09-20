export function answerQuestion(answer) {
	console.log('we are inside answerQuestion')
	return {
		type: 'ANSWER_QUESTION',
		payload: answer
	} 
}