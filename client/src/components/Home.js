import React, { Component } from 'react';

import QuestionList from '../containers/QuestionList';
import QuestionDetail from '../containers/QuestionListDetail';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Weekendr</h1>
        <QuestionList />
        <QuestionDetail />
      </div>
    );
  }
}
