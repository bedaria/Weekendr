import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import SidebarPreferences from '../components/SidebarPreferences'

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.renderSidebarDetail = this.renderSidebarDetail.bind(this);
	}

	renderSidebarDetail() {
		return this.props.quizAnswers.map((q,index) => {
			return (
				<div className="SidebarDetail" key={index}>
				<h1>Title: {q.title}</h1>
				<h1>{q.option.option && q.option.option}</h1>
					<img src={q.option.imageUrl}/>
				</div>
				)
		})
	}

	render() {
		return (
			<div className="Sidebar">
			{this.renderSidebarDetail()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)