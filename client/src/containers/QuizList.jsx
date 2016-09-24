import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion, postQuestionListInput } from '../actions/QuizList';
import { bindActionCreators } from 'redux';
import  QuizListItem  from '../components/QuizListItem'
class QuizList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
		this.onAnswerClicked = this.onAnswerClicked.bind(this)
	}
	onAnswerClicked(answer) {
		this.props.answerQuestion(answer, this.props)
	}

	renderQuiz() {
		if (this.props.quizList.length === this.props.questionIndex) {
			var dummyData = {
				"JSON": [
				'1','2','3']
			}
			console.log('dummyData is: ',dummyData)
			this.props.postQuestionListInput(dummyData)
			return (
				<div>
				<p>We are at the end of our list</p>
				</div>
				)
		}
		let arr = this.props.quizList[this.props.questionIndex].options
		return arr.map((q) => {
			return (
				<QuizListItem 
					key={q.id}
					option={q.option} 
					src={q.imageUrl} 
					onAnswerClicked = {this.onAnswerClicked}
				/>
			)	
		})
	}

	render() {
		return (
			<div className="QuizList Col-xs={4} xsOffset={2} md={4}">
			{this.renderQuiz()}
			</div>
			)
	}
}


		function mapStateToProps(state) {
			return {
				quizList: state.quiz.quizList,
				questionIndex: state.quiz.questionIndex,
				quizAnswers: state.quiz.quizAnswers
			}
		}

//map dispatch to props is how I pass actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ answerQuestion: answerQuestion, postQuestionListInput}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)