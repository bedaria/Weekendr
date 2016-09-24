import React, { Component } from 'react';
import UserInput from '../containers/UserInput';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Got plans for the weekend?</h1>
        <h4>Plan a trip that fits your budget and preferences.</h4>
        <UserInput />
      </div>
    );
  }
}
