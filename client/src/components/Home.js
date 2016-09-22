import React, { Component } from 'react';
import SideBar from '../containers/SideBar';
import UserInput from '../containers/UserInput';

export default class Home extends Component {
  render() {
    return (
      <div>
      <SideBar />
        <h1>Welcome to Weekendr</h1>
        <UserInput/>

      </div>

    );
  }
}
