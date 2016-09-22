import React, { Component } from 'react';
import SideBar from '../containers/SideBar'
export default class Home extends Component {
  render() {
    return (
      <div>
      <SideBar />
        <h1>Welcome to Weekendr</h1>
      </div>
    );
  }
}
