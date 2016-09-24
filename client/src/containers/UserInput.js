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
      date: 0,
      latLng: {
        lat: 0,
        lng: 0
      }
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {

    this.setState({[event.target.id]: event.target.value})
    console.log("this.state: ", this.state)
  }

componentDidMount(){
    var lat;
    var long;
    function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showLocation);
      } else {
         console.log( "Geolocation is not supported by this browser.");
      }
    }
    function showLocation(positionA){
      console.log("Latitude: " + positionA.coords.latitude + " Longitude: ", + positionA.coords.longitude); 
      lat = positionA.coords.latitude;
      long = positionA.coords.longitude;
    }

    var prom = new Promise(
      function(resolve, reject){
        resolve(getLocation);
      }).then(function(val) {
      console.log("****");
      val();
    })
    .catch(function(reason){
      console.log('Handle rejected promise ('+reason+') here.');
    });
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
  console.log(state.userInput.userInputForm, "This is on userInputForm");
  return {userInputForm: state.userInput.userInputForm}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  sendInputToState: sendInputToState }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
