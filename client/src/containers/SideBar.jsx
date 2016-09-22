import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'underscore';
import  SideBarDetail  from '../components/SideBar_Detail'

class SideBar extends Component {
	constructor(props) {
		super(props)
	}

	renderSideBarDetail() {
		console.log('state inside SideBar: ',this.props)
		console.log('inside renderSideBarDetail arr is: ',arr)
		let arr =  quizList.map((question)=> {
			return question.options.filter((q) => {
				return (_.contains(quizAnswers, q.option))
			})
		})
		return arr.map((question) => {			
			return (
				<SideBarDetail 
					key={question.id}
					option={question.option}
					src={question.imageUrl}
				/>
			)	
		})
	}

	render() {
		return (
			<div className="SideBar Col-xs={4} xsOffset={2} md={4}">
			<h1>Title</h1>
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

//map dispatch to props is how I pass actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({postQuestionListInput}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)