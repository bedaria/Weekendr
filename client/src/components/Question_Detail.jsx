import React, { Component } from 'react'


class QuestionDetail extends Component {
	constructor(props) {
		super(props)
		this.selectAnswer = this.selectAnswer.bind(this)
	}
	selectAnswer() {
		console.log('we are inside selectAnswer: ',this.props)
		this.props.onAnswerClicked(this.props.option)
	}
	render() {
		if (!this.props.option) {
			return <div>Select an option</div>
		}
		return (
		<div onClick={this.selectAnswer}>
		<h1>{this.props.option}</h1>
		<img src={this.props.src}/>
		</div>
		)
	}
}



export default QuestionDetail; 


