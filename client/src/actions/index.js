import axios from 'axios';

export function answerQuestion(answer, props, answersArr) {
	console.log('answerQuestions props are: ',props)
	props.quizAnswers.push(answer)
		return {
		type: 'ANSWER_SELECTED',
		payload: {answers: props.quizAnswers, questionIndex: props.questionIndex+1}
		}
}


export function postQuestionListInput(input) {
	console.log('we are in postQuestionListInput', input)
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

export function updateUserInfo(username, lastName, firstName, email) {
  return {
    type: 'LOG_IN',
    payload: {
      firstName,
      lastName,
      username,
      email
    }
  }
}