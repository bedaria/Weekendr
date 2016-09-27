import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import Quiz from '../containers/Quiz';

export default class Preferences extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Quiz />
      </div>
    );
  }
}
