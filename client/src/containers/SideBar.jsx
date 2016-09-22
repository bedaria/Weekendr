import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';

class SideBar extends Component {
	constructor(props) {
		super(props)
		this.renderSideBarDetail = this.renderSideBarDetail.bind(this);
	}

	renderSideBarDetail() {
		return this.props.quizAnswers.map((q,index) => {
			return (
				<div key={index}>
				<h1>Title: {q.title}</h1>
				<h1>{q.option.option && q.option.option}</h1>
					<img src={q.option.imageUrl}/>
				</div>
				)
		})
	}

	render() {
		return (
			<div className="SideBar Col-xs={4} xsOffset={2} md={4}">
			{this.renderSideBarDetail()}
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


function mapDispatchToProps(dispatch) {
	return bindActionCreators({postQuestionListInput}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)