import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveTripToState } from '../actions/index';


class TripList extends Component {
	constructor(props) {
		super(props)
		this.renderTrips = this.renderTrips.bind(this);
	}
	

	renderTrips() {
		console.log('inside TripList received is: ',this.props)
		//do a map function and pass props to TripListDetails
	}



	render() {
		return (
			<div className="TripList Col-xs={4} xsOffset={2} md={4}">
			{this.renderTrips()}
			</div>
			)
	}
}


function mapStateToProps(state) {
	return {
		received: state.received
	}
}

//send TripModified Data to trip_reducer
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ saveTripToState }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList)