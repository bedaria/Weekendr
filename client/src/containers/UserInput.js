import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { sendInputToState, getLatLng } from '../actions/index.js'
import { bindActionCreators } from 'redux'
import ProgressButton from 'react-progress-button'


class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonState: '',
      budget: 400,
      numTravelers : 1,
      date: 0,
      latLng: {
        lat: this.props.coordinates.latitude,
        lng: this.props.coordinates.longitude
      }
    }
    this.updateState = this.updateState.bind(this);
  }
  

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
    console.log("this.state: ", this.state)
  }
  handleClick () {
    this.setState({buttonState: 'loading'})
    setTimeout(function() {
      this.setState({buttonState: 'success'})
    }.bind(this), 3000)
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <label>What is your budget?</label>
              <input type="number" id="budget" onChange={this.updateState} placeholder="$400" min="0" max="99999999999"/>
          </div>
          <div>
            <label>How many total homies are going?</label>
            <input type="number" id="numTravelers" onChange={this.updateState} placeholder="Number of Homies Going" min="0" max="20"/>
          </div>
          <div>
            <label> Date of Departure </label>
            <input type="date" id="date" onChange={this.updateState} placeholder="12/20/2016"/>
          </div>
        </div>
        <div>
          <label> Use your current location as travel origin? </label>
          <div onClick={()=> this.props.getLatLng(this.state)}>
            Click to toggle.
          </div>
        <div>
          <ProgressButton onClick={this.handleClick, this.props.getLatLng(this.state)} state={this.state.buttonState}>
            Go!
          </ProgressButton>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    userInputForm: state.userInput.userInputForm, 
    coordinates: state.coordinates
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sendInputToState, getLatLng }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
