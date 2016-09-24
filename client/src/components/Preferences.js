import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import QuizList from '../containers/QuizList';

export default class Preferences extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <QuizList />
      </div>
    );
  }
}
