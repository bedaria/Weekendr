import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import SidebarPreferenceItem from '../components/SidebarPreferenceItem'
import SidebarTripItem from '../components/SidebarTripItem'

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.renderSidebarPreferenceItems = this.renderSidebarPreferenceItems.bind(this);
		this.renderSidebarTripInfo = this.renderSidebarTripInfo.bind(this)
	}

	renderSidebarTripInfo(){
		console.log('inside renderSidebarTripInfo this.props are: ', this.props)
		return (
			<SidebarTripItem
			budget= {this.props.userInputForm && this.props.userInputForm.budget}
			numTravelers = {this.props.userInputForm && this.props.userInputForm.numTravelers}
			date = {this.props.userInputForm && this.props.userInputForm.date}
			lat =  {this.props.userInputForm && this.props.userInputForm.latLng.lat}
			lng = {this.props.userInputForm && this.props.userInputForm.latLng.lng}
			/>
			)
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
			<div className="Sidebar">
			<div className="SidebarTripInfo">
			{this.renderSidebarTripInfo()}
			</div>
			<div className="SidebarPreferences">
			{this.renderSidebarPreferenceItems()}
			</div>
			</div>
			)
	}
}

	function mapStateToProps(state) {
		return {
			quizList: state.quiz.quizList,
			questionIndex: state.quiz.questionIndex,
			quizAnswers: state.quiz.quizAnswers,
			userInputForm: state.userInput.userInputForm
		}
	}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({postQuestionListInput}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)