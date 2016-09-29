import React, { Component } from 'react';
import UserInput from '../containers/UserInput';

export default class Home extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-message">
          <h2>Got plans for the weekend?</h2>
          <h5>Plan a trip that fits your budget and preferences.</h5>
        </div>

        <UserInput/>
      </div>
    );
  }
}
