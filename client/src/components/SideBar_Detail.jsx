import React, { Component } from 'react'


class SideBarDetail extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		if (!this.props.option) {
			return <div>Select an option</div>
		}
		return (
		<div>
		<h1>{this.props.option}</h1>
		<img src={this.props.src}/>
		</div>
		)
	}
}



export default SideBarDetail; 


