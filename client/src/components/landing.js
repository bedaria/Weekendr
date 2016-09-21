import React, { Component } from 'react';
import QuizList from '../containers/Quiz_List'
class Landing extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to our app</h1>
				<QuizList />
			</div>
		)
	}
}


export default Landing;

