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
  }
  componentDidMount() {
    this.props.getLatLng(this.state);
  }
  checkForLatLng(){

  }
  updateState(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleClick() {
    this.setState({ buttonState: 'loading' });
    this.props.sendInputToState(this.state);
    if(this.state.latLng.lat !== 0 && this.state.latLng.lng !== 0){
      console.log("obviously this works!!!")
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
            <label
              htmlFor="budget"
              data-error="Minimum Budget is $150"
              data-success="Sweet!"
            >
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
            <label
              htmlFor="travelers"
              data-error="You need at least 1 person going on the trip!"
              data-success="Sweet!"
            >
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
            <label
              htmlFor="date"
            >
              Which weekend are you free?
            </label>
            <Input
              s={12}
              type="date"
              id="datePicker"
              onChange={this.updateState}
              min="2016-09-26"
            >
              <Icon>today</Icon>
            </Input>
          </div>
        </Row>
        <div>
          <ProgressButton
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
