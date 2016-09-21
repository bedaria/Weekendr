import axios from 'axios';

//pas index as this.props.questions.index
export function answerQuestion(answers, index) {
	console.log('we are inside answerQuestion')
	console.log('question input into answerQuestion', answers)
	console.log('index input into answerQuestion',index)
	return function(dispatch, getState) {
		console.log('state inside answerQuestion: ',getState())
		dispatch({ 
			type: 'ANSWER_SELECTED',
			payload: {answers: answers, index: index+1 }
		})
	}
}

export function incrementQuestion(index) {
	console.log('we are inside incrementQuestion: ',index)
	return {
			type: 'INCREMENT_INDEX',
			payload: {index: index+1}
		}
	}


export function postQuestionListInput(input) {
	console.log('we are in postQuestionListInput')
	return function(dispatch) {
		//add user input to input field here
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
