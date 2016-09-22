import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			page: 'firstQuestions',
			budget: 400,
			numTravelers : 1,
			modeTransport: null,
			date: 0
    }

    this.updateState = this.updateState.bind(this);
    this.takeToNextPage = this.takeToNextPage.bind(this);
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  takeToNextPage(){
  	console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>

        <label>What is your budget?</label>
        	<input type="number" id="budget" onChange={this.updateState} placeholder="$400"/>
          <div>
        <label>How many total homies are going?</label>
        	<input type="number" id="numTravelers" onChange={this.updateState} placeholder="Number of Homies Going"/>
          </div>
          <div>

        <label> Date of Departure </label>
	        <input type="date" id="date" onChange={this.updateState} placeholder="12/20/2016"/>
          </div>
          <div>
        <label> Preferred Mode of Transport? </label>
	        <select id="modeTransport" onChange={this.updateState}>
	  		    <option value="A">Airplane</option>
	  		    <option value="B">Car</option>
	  		    <option value="C">Train</option>
	  		    <option value="D">Bus</option>
	        </select>
          </div>
          </div>
        <input type="submit" onClick={this.takeToNextPage}/>
      </div>
    )
  }
}

export default connect(null, {
  updateUserInfo: updateUserInfo
})(UserInput)