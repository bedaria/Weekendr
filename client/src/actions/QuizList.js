import {
	ANSWER_SELECTED
} from './actionTypes'

export function answerQuestion(answer, props, answersArr) {
	console.log('we are inside QuizList action inside answerQuestion')
	let answerObj = {}
	answerObj.title = props.quizList[props.questionIndex].title
	answerObj.option = props.quizList[props.questionIndex].options.filter((q) => {
		return q.option === answer
	})[0]
		props.quizAnswers.push(answerObj)
		return {
		type: ANSWER_SELECTED,
		payload: {answers: props.quizAnswers, questionIndex: props.questionIndex+1}
		}
}