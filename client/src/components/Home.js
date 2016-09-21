import React, { Component } from 'react';

import QuizList from '../containers/Quiz_List';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Weekendr</h1>
        <QuizList />
      </div>
    );
  }
}
