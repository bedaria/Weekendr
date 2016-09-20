import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/index';
import { bindActionCreators } from 'redux';

class QuestionList extends Component {
	constructor(props) {
		super(props)
	}
	renderList() {
		console.log('inside QuestionList inside renderList: ',this.props)
		return this.props.questions.map((question) => {
			return (
				<li
				key = {question.title}
				onClick= {()=> this.props.answerQuestion(question)}
				className= "QuestionListBox"
				>
				{question.title} 
				</li>
				)
		})
	}
render() {
	console.log('props are : ',this.props)
	return (
		<div>
		<ul className = "QuestionList">
		{this.renderList()}
		</ul>
		</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({answerQuestion: answerQuestion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)