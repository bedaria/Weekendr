import React, { Component } from 'react';
import NavBar from './NavBar';

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
App.propTypes = {
  children: React.propTypes.string.isRequired,
};
