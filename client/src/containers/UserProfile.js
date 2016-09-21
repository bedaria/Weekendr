import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {
    console.log('props inside UserProfile: ', this.props);
    return (
      <div>
        <h4>Profile Information</h4>
        <p><strong>Name: </strong>{this.props.user.firstName} {this.props.user.lastName}</p>
        <p><strong>Username: </strong>{this.props.user.username}</p>
        <p><strong>Email: </strong>{this.props.user.email}</p>
        <p><strong>Location: </strong>{this.props.user.location}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside UserProfile above
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserProfile);
