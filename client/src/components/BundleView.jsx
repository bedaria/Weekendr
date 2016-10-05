import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import BundleList from '../containers/BundleList';

export default class BundleView extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <BundleList />
      </div>
    );
  }
}
