import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postQuestionListInput } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'underscore';

class SideBar extends Component {
	constructor(props) {
		super(props)
		this.renderSideBarDetail = this.renderSideBarDetail.bind(this);
	}

	renderSideBarDetail() {
		console.log('state inside SideBar: ',this.props)
		let array =  this.props.quizList.map((question)=> {
			return question.options.filter((q) => {
				console.log('drew is a genius: ',_.contains(this.props.quizAnswers, q.option))
				return (_.contains(this.props.quizAnswers, q.option))
			})
		})
		console.log('array inside renderSideBar is: ****&&&&****: ',array)
		return array.map((q, index) => {
		console.log('^^^^inside renderSideBar q is : ',q)
			return (
				<div key={index}>
					<h1>{q[0] && q[0].option}</h1>
					<img src={q[0] && q[0].imageUrl}/>
				</div>
			)	
		})
	}

	render() {
		return (
			<div className="SideBar Col-xs={4} xsOffset={2} md={4}">
			<h1>Title</h1>
			{console.log('&&&&&&&&&&&&&: ',this.renderSideBarDetail())}
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