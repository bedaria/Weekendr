import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { sendInputToState, getLatLng } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: 400,
      numTravelers : 1,
      date: 0,
      latLng: {
        lat: 0,
        lng: 0
      }
    }
    this.updateState = this.updateState.bind(this);
  }
  compnentDidMount(){
        console.log("what?!!!!")
    this.props.getLatLng();
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
    console.log("this.state: ", this.state)
  }




  render() {
    return (
      <div>
        <div>
        <label>What is your budget?</label>
          <input type="number" id="budget" onChange={this.updateState} placeholder="$400" min="0" max="99999999999"/>
          <div>
        <label>How many total homies are going?</label>
          <input type="number" id="numTravelers" onChange={this.updateState} placeholder="Number of Homies Going" min="0" max="20"/>
          </div>
          <div>
        <label> Date of Departure </label>
          <input type="date" id="date" onChange={this.updateState} placeholder="12/20/2016"/>
          </div>
          </div>
        <input type="submit" onClick={ ()=> this.props.sendInputToState(this.state)}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userInputForm: state.userInput.userInputForm
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  sendInputToState: sendInputToState, getLatLng }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
