import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import SidebarPreferenceItem from '../components/SidebarPreferenceItem'


class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.renderSidebarDetail = this.renderSidebarDetail.bind(this);
	}

	renderSidebarDetail() {
		return this.props.quizAnswers.map((q,index) => {
			return (
				<SidebarPreferenceItem 
					key={index}
					title={q.title} 
					src={q.option.imageUrl}
					answer={q.option.option} 
				/>
				)
		})
	}

	// return (
	// 			<QuizListItem 
	// 				key={q.id}
	// 				option={q.option} 
	// 				src={q.imageUrl} 
	// 				onAnswerClicked = {this.onAnswerClicked}
	// 			/>
	// 		)	






		// return (
		// 		<div className="SidebarDetail" key={index}>
		// 		<h1>Title: {q.title}</h1>
		// 		<h1>{q.option.option && q.option.option}</h1>
		// 			<img src={q.option.imageUrl}/>
		// 		</div>
		// 		)





	render() {
		return (
			<div className="SidebarPreferences">
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