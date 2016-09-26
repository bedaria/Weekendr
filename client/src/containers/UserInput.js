import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getLatLng } from '../actions/getLatLng'
import { sendInputToState } from '../actions/sendInputToState'
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
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    this.props.getLatLng(this.state)
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
    console.log("this.state: ", this.state)
  }
  handleClick () {
    this.setState({buttonState: 'loading'})
    setTimeout(function() {

      console.log("inside of the timeout", this.state);
      this.props.sendInputToState(this.state);
      this.setState({buttonState: 'success'});
      var redirectURL = window.location.hostname + "/quiz";
      location.href = redirectURL;
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
            <input type="date" id="datePicker" onChange={this.updateState} min="2016-09-26"/>
          </div>
        </div>
        <div>
        <div>
          <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
            Go!
          </ProgressButton>
        </div>
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
