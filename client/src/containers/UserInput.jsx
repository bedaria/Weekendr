import React from 'react';
import { bindActionCreators } from 'redux';
import ProgressButton from 'react-progress-button';
import { Input, Row, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getLatLng } from '../actions/getLatLng';
import { sendInputToState } from '../actions/sendInputToState';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: '',
      budget: 400,
      numTravelers: 1,
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
    var submit = document.querySelector('#submit');

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

      var budget = budgetInput.value;
      var numTravelers = numTravelersInput.value;
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

        if (datePicker < today) {
          datePickerInputIssuesTracker.add("cannot book a trip in the past");
        } else if( datePicker.getFullYear() > today.getFullYear()+1){
          datePickerIssuesTracker.add("can't book a trip more than 1 year from today");
        }
      };

      if (budget.length && numTravelers.length && datePicker.length) {
        checkRequirements();
      } else {
        secondInputIssuesTracker.add("Fields must not be empty!");
      }

      var budgetInputIssues = budgetInputIssuesTracker.retrieve();
      var numTravelersInputIssues = numTravelersInputIssuesTracker.retrieve();
      var datePickerInputIssues = datePickerInputIssuesTracker.retrieve();

      budgetPasswordInput.setCustomValidity(budgetInputIssues);
      numTravelersPasswordInput.setCustomValidity(numTravelersInputIssues);
      datePickerPasswordInput.setCustomValidity(datePickerInputIssues);

      if (budgetInputIssues.length + numTravelersInputIssues.length + datePickerInputIssues.length === 0) {
        alert("First questionaire is successful!");
      }
    
  }

  handleClick() {
    this.setState({ buttonState: 'loading' });
    this.props.sendInputToState(this.state);
    var LatLng = this.props.coordinates.coordinates;
    if(LatLng.latitude !== 0 && LatLng.longitude !== 0){
      setTimeout(function() {
        this.setState({ buttonState: 'success' });
        browserHistory.push('/preferences');
      }.bind(this), 3000);
    } else {
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
            <label>
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
              validate
            >
              <Icon>monetization_on</Icon>
            </Input>
          </div>
          <div>
            <label>
              How many people are traveling?
            </label>
            <Input
              s={12}
              type="number"
              id="numTravelers"
              onChange={this.updateState}
              placeholder="3"
              min="0"
              max="20"
              validate
            >
              <Icon>group</Icon>
            </Input>
          </div>
          <div>
            <label>
              Which weekend are you free?
            </label>
            <Input
              s={12}
              type="date"
              id="datePicker"
              onChange={this.updateState}
            >
              <Icon>today</Icon>
            </Input>
          </div>
        </Row>
        <form>
            <input id="submit" type="submit" onClick={this.validateForm}/>
        </form>
        <div>
          <ProgressButton
            id="submit"
            onClick={this.handleClick}
            state={this.state.buttonState}
          >
            Go!
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
