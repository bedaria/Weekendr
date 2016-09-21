import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeQuestion, postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';

class QuestionDetail extends Component {
	constructor(props) {
		super(props)

	}
	render() {
		if (!this.props.question) {
			return <div>Select a question</div>
		}
		return (
			<div>
				<h3>Answered Question</h3>
				<div>Selected Answer is: {this.props.question.answer}</div>
				<button onClick={()=> this.props.postQuestionListInput(this.props.question.answer)}>Click to send</button>
				<p>received data: {this.props.received}</p>
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		question: state.activeQuestion,
		received: state.received
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ postQuestionListInput: postQuestionListInput}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)

