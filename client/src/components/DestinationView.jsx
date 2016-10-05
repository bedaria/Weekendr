import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import CityList from '../containers/CityList';

export default class DestinationView extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <CityList />
      </div>
    );
  }
}
