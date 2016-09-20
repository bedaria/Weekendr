import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeQuestion } from '../actions/index';
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
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		question: state.activeQuestion
	}
}

export default connect(mapStateToProps)(QuestionDetail)

