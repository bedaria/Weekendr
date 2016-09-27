import React, { Component } from 'react';
import { connect } from 'react-redux';
//import TripList from './TripList'
import { authorizeUser, logOut } from '../actions/User.js'
import { browserHistory } from 'react-router';
import axios from 'axios';

class UserProfile extends Component {
  componentWillMount() {
    if(localStorage.token)
      this.props.authorizeUser()
    else {browserHistory.push('/login')}
  }

  render() {
    if(localStorage.token)
      return (
        <div>
          <h4>Profile Information</h4>
          <p><strong>Name: </strong>{localStorage.firstName}</p>
          <p><strong>Username: </strong>{localStorage.username}</p>
          <p><strong>Lastname: </strong>{this.props.user.lastName}</p>
          <p><strong>email: </strong>{this.props.user.email}</p>
          <button onClick={this.props.logOut}> Logout </button>
        </div>
      );
    else
      return <div> Please login </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { authorizeUser, logOut })(UserProfile);
