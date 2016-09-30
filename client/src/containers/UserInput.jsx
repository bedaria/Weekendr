import React from 'react';
import { bindActionCreators } from 'redux';
import ProgressButton from 'react-progress-button';
import { Input, Row, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getLatLng } from '../actions/getLatLng';
import { sendInputToState } from '../actions/sendInputToState';
import _ from 'underscore';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: '',
      budget: 400,
      numTravelers: 1,
      originCity: 'LAX',
      latLng: {
        lat: this.props.coordinates.latitude,
        lng: this.props.coordinates.longitude,
      },
    };
    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  componentDidMount() {
    this.props.getLatLng(this.state);
  }
  updateState(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  validateForm() {
    var budgetInput = document.querySelector('#budget');
    var numTravelersInput = document.querySelector('#numTravelers');
    var datePickerInput = document.querySelector('#datePicker');
    var flag = false;
    // var submit = document.querySelector('#submit');
    this.setState =  this.setState.bind(this);
    console.log(this.state);
    function IssueTracker() {
      this.issues = [];
    }
    IssueTracker.prototype = {
      add: function (issue) {
        this.issues.push(issue);
      },
      retrieve: function () {
        var message = "";
        switch (this.issues.length) {
          case 0:
            break;
          case 1:
            message = "Please correct the following issue:\n" + this.issues[0];
            break;
          default:
            message = "Please correct the following issues:\n" + this.issues.join("\n");
            break;
        }
        return message;
      }
    };
    onClickEvent();
    function onClickEvent(){
      var budget = Number(budgetInput.value);
      var numTravelers = Number(numTravelersInput.value);
      var datePicker = new Date(datePickerInput.value);

      var budgetIssuesTracker = new IssueTracker();
      var numTravelersIssuesTracker = new IssueTracker();
      var datePickerIssuesTracker = new IssueTracker(); 

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; 
      var yyyy = today.getFullYear();
      if(dd<10){
        dd='0'+dd
      } 
      if(mm<10){
        mm='0'+mm
      } 
      today = yyyy+'-'+mm+'-'+dd;
      function checkRequirements() {
        if (budget < 150) {
          budgetIssuesTracker.add("fewer than minimum $150");
        } else if (budget > 99999999999) {
          budgetIssuesTracker.add("greater than max budget: $99,999,999,999");
        }

        if (numTravelers < 1) {
          numTravelersIssuesTracker.add("need at least one traveler");
        } else if (budget > 99999999999) {
          numTravelersIssuesTracker.add("too many travelers, 20 is the max");
        }

        if (datePicker.getFullYear() < yyyy) {
          datePickerIssuesTracker.add("cannot book a trip in the past");
        } else if( datePicker.getFullYear() > yyyy+1){
          datePickerIssuesTracker.add("can't book a trip more than 1 year from today");
        }
      };

      checkRequirements();
    
      var budgetInputIssues = budgetIssuesTracker.retrieve();
      var numTravelersInputIssues = numTravelersIssuesTracker.retrieve();
      var datePickerInputIssues = datePickerIssuesTracker.retrieve();
      // document.getElementById("submit").setCustomValidity(budgetInputIssues);
      // document.getElementById("validationButton").setCustomValidity(numTravelersInputIssues);
      // document.getElementById("validationButton").setCustomValidity(datePickerInputIssues);

      if (budgetInputIssues.length + numTravelersInputIssues.length + datePickerInputIssues.length === 0) {
        flag= true;
      } 

  }
    if(!flag){
        this.setState({ buttonState: 'disabled'})
      }
  }

  handleClick() {
    this.setState({ buttonState: 'loading' });
    this.props.sendInputToState(this.state);
    var LatLng = this.props.coordinates.coordinates;
    if(LatLng.latitude !== 0 && LatLng.longitude !== 0){
      this.validateForm();
      if(this.state.buttonState !== 'disabled'){
        this.setState({ buttonState: 'success' });
        browserHistory.push('/preferences');
      }
    } else {
      console.log("ERROR in handleClick")
      alert("Errors in inputs");
      setTimeout(function() {
        this.handleClick();
      }.bind(this), 3000);
    };
  }
  render() {
    return (
      <div className="landing-user-input">
        <Row>
          <div>
            <label id="budgetLabel">
              What is your total budget?
            </label>
            <Input
              s={12}
              type="number"
              id="budget"
              onChange={this.updateState}
              placeholder="$400"
              min="150"
              max="99999999999"
              validate="true"
              required
            >
              <Icon>monetization_on</Icon>
            </Input>
          </div>
          <div>
            <label id="numTravelersLabel">
              How many people are traveling?
            </label>
            <Input
              s={12}
              type="number"
              id="numTravelers"
              onChange={this.updateState}
              placeholder="3"
              min="1"
              max="20"
              validate="true"
              required
            >
              <Icon>group</Icon>
            </Input>
          </div>
          <div>
            <label id="dateLabel">
              Which days are you free?
            </label>
            <Input
              s={12}
              type="date"
              id="datePicker"
              onChange={this.updateState}
              on
              min="2016-10-9"
              validate
              required
            >
              <Icon>today</Icon>
            </Input>
          </div>
        </Row>
        <div>
          <ProgressButton
            id="submit"
            onClick={this.handleClick}
            state={this.state.buttonState}
          >Go!
          </ProgressButton>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userInputForm: state.userInput.userInputForm,
    coordinates: state.coordinates
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendInputToState, getLatLng }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
