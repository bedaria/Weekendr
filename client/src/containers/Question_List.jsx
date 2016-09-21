import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/index';
import { bindActionCreators } from 'redux';
import  QuestionDetail  from './Question_Detail'

class QuestionList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
		this.onAnswerClicked = this.onAnswerClicked.bind(this)
	}
	onAnswerClicked(answer) {
		this.props.quizAnswers.push(answer)
		answerQuestion(this.props.quizAnswers, this.props.questionIndex)
	}

	renderQuiz() {
		console.log('state inside QuestionList: ',this.props)
		let arr = this.props.quizList[this.props.questionIndex].options
		console.log('inside renderQuiz arr is: ',arr)
		console.log('this is : ',this)
		return arr.map((q) => {
			return (
				<QuestionDetail 
				option={q.option} 
				src={q.imageUrl} 
				onAnswerClicked = {this.onAnswerClicked}
				/>			
				)	
		})
	}

	

	render() {
		return (
			<div className="QuestionList">
			{this.renderQuiz()}
			</div>
			)
	}
}


//how I pass through state to props
function mapStateToProps(state) {
	return {
		...state.quiz
	}
}

//map dispatch to props is how I pass actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ answerQuestion: answerQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)