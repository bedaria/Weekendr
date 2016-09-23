import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { sendInputToState } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			budget: 400,
			numTravelers : 1,
			modeTransport: null,
			date: 0
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
  console.log(this.props, "We are inside of USERINPUT")

    this.setState({[event.target.id]: event.target.value})
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
        <input type="submit" onClick={ ()=> this.props.sendInputToState("TEST inside of sendInputToState", this.props)}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {userInputForm: state.userInput.userInputForm}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  sendInputToState: sendInputToState }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
