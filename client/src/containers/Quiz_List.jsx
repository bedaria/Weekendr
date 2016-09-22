import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion, postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import  QuestionDetail  from '../components/Question_Detail'

class QuizList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
		this.onAnswerClicked = this.onAnswerClicked.bind(this)
	}
	onAnswerClicked(answer) {
		console.log('we are inside QuizList inside onAnswerClicked',this.props)
		//check to see if index = length of quizList
		if (this.props.questionIndex === this.props.quizList.length) {
			//invoke API call to backend
			//invoke this.props.postQuestionListInput
			var dummyData = {
				"JSON": [
				'1','2','3']
			}

			// this.props.postQuestionListInput(this.props.quizList)
			this.props.postQuestionListInput(dummyData)
			console.log('------questionIndex is the length of quizlist')
		}
		this.props.answerQuestion(answer, this.props)
	}

	renderQuiz() {
		console.log('state inside QuizList: ',this.props)
		if (this.props.quizList.length === this.props.questionIndex) {
			return (
				<div>
				<p>We are at the end of our list</p>
				</div>
				)
		}
		let arr = this.props.quizList[this.props.questionIndex].options
		console.log('inside renderQuiz arr is: ',arr)
		console.log('this is : ',this)
		return arr.map((q) => {
			console.log('q is : ',q)
			return (
				<QuestionDetail 
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
							<h1>{this.props.quizList[this.props.questionIndex].title}</h1>
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