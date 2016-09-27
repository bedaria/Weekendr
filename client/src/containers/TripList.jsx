import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSelectedTrip } from '../actions/index';


class TripList extends Component {
  constructor(props) {
    super(props);
    this.renderTrips = this.renderTrips.bind(this);
  }
  renderTrips() {
    return this.props.received.data.geonames.map((city, index) => {
      return (
        <div
          key={index}
        >
          <h1>{city.name}</h1>
          <p>{city.population}</p>
        </div>
          );
    });
  }

  render() {
    return (
      <div className="TripList Col-xs={4} xsOffset={2} md={4}">
      {this.renderTrips()}
      </div>
      );
  }
}


function mapStateToProps(state) {
  return {
    received: state.receivedCities,
  };
}

// send TripModified Data to trip_reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendSelectedTrip }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TripList)