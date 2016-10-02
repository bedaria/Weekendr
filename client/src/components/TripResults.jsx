import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import TripList from '../containers/TripList';

export default class Destinations extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <TripList />
      </div>
    );
  }
}
