export function answerQuestion(question) {
	console.log('we are inside answerQuestion')
	return {
		type: 'ANSWER_SELECTED',
		payload: question
	} 
}