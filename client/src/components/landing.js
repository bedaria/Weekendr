import React, { Component } from 'react';
import QuestionList from '../containers/Question_List'
class Landing extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to our app</h1>
				<QuestionList />
			</div>
		)
	}
}


export default Landing;

