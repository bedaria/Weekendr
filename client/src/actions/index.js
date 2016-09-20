import axios from 'axios';


export function answerQuestion(question) {
	console.log('we are inside answerQuestion')
	return {
		type: 'ANSWER_SELECTED',
		payload: question
	} 
}

export function postQuestionListInput(input) {
	console.log('we are in postQuestionListInput')
	return function(dispatch) {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(function(data) {
			console.log('recevied data inside actions: ',data)
			dispatch({
				type: 'RECEIVED_DATA',
				payload: data
			})
		})
		.catch(function(err) {
			console.log('error inside postQuestionListInput inside actions: ',err)
		})
	}
}