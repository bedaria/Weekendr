import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import SidebarPreferenceItem from '../components/SidebarPreferenceItem'


class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.renderSidebarPreferenceItems = this.renderSidebarPreferenceItems.bind(this);
	}

	renderSidebarPreferenceItems() {
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

	render() {
		return (
			<div className="SidebarPreferences">
			{this.renderSidebarPreferenceItems()}
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