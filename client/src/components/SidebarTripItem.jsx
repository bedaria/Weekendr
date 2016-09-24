import React, { Component } from 'react'


class SidebarTripItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<p>Budget: {this.props.budget}</p>
				<p>Number of travelers: {this.props.numTravelers}</p>
				<p>Date: {this.props.date}</p>
			</div>
		)
	}
}


export default SidebarTripItem; 