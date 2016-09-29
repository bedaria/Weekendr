import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AirbnbList extends Component {
  renderListings() {
    return this.props.airbnb.listings.map((listing) => {
      return (
        <div>{listing.listing.name}</div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderListings()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airbnb: state.airbnb
  };
}

export default connect(mapStateToProps)(AirbnbList);
