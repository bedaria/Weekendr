import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import UserInput from '../containers/UserInput';
import TripList from '../containers/TripList';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Sidebar />
      <TripList/>
        <h1>Welcome to Weekendr</h1>
        <UserInput/>

      </div>

    );
  }
}
