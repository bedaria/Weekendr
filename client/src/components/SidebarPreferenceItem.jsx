import React, { Component } from 'react'


class QuizListItem extends Component {
	constructor(props) {
		super(props)
		// this.changePreference = this.changePreference.bind(this)
	}
	// changePreference() {
	// 	console.log('we are inside changePreference: ',this.props)
	// 	this.props.onChangePreference(this.props.option)
	// }
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<img src={this.props.src}/>
				<h3>{this.props.answer}</h3>
		</div>
		)
	}
}




export default QuizListItem; 

