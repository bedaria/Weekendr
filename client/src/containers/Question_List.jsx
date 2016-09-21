import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion, incrementQuestion } from '../actions/index';
import { bindActionCreators } from 'redux';
import  QuestionDetail  from './Question_Detail'

class QuestionList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
		this.onAnswerClicked = this.onAnswerClicked.bind(this)
	}
	onAnswerClicked(answer) {
		console.log('we are inside QuestionList inside onAnswerClicked',this.props)
		this.props.quizAnswers.push(answer)
		answerQuestion(this.props.quizAnswers, this.props.questionIndex)
		incrementQuestion(this.props.questionIndex)
	}

	renderQuiz() {
		console.log('state inside QuestionList: ',this.props)
		let arr = this.props.quizList[this.props.questionIndex].options
		console.log('inside renderQuiz arr is: ',arr)
		console.log('this is : ',this)
		return arr.map((q) => {
			console.log('q is : ',q)
			return (
				<li key={q.id}>
				<QuestionDetail 
				option={q.option} 
				src={q.imageUrl} 
				onAnswerClicked = {this.onAnswerClicked}
				/>	
				</li>		
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
		quizList: state.quiz.quizList,
		questionIndex: state.quiz.questionIndex,
		quizAnswers: state.quiz.quizAnswers
	}
}

//map dispatch to props is how I pass actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ answerQuestion: answerQuestion, incrementQuestion: incrementQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)