import React, { Component } from 'react';
import NavBar from './NavBar.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
