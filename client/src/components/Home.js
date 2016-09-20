import React, { Component } from 'react';
import QuestionList from '../containers/Question_List';
import QuestionDetail from '../containers/Question_List_Detail';

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
