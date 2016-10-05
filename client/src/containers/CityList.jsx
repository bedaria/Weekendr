import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSelectedCity } from '../actions/tripActions';
import CityListItem from '../components/CityListItem';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.renderTrips = this.renderTrips.bind(this);
    this.onSelectCity = this.onSelectCity.bind(this);
  }

  onSelectCity(city, answers, userInputForm, coordinates) {
    this.props.sendSelectedCity(city, answers, userInputForm, coordinates);
  }

  renderTrips() {
    return this.props.received.data.geonames.map((city, index) => {
      return (
        <CityListItem
          key = {index}
          cityName = {city.name}
          population = {city.population}
          id = {city.geonameId}
          lat = {city.lat}
          lng = {city.lng}
          countryCode = {city.countrycode}
          onSelectCity = {this.onSelectCity}
          answers = {this.props.quizAnswers}
          userInputForm = {this.props.userInputForm}
          coordinates = {this.props.coordinates}
        />
      );
    });
  }

  render() {
    return (
      <div className="city-list">
        <h5>Select your destination:</h5>
        {this.renderTrips()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    received: state.receivedCities,
    quizAnswers: state.quiz.quizAnswers,
    userInputForm: state.userInput.userInputForm,
    coordinates: state.coordinates,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendSelectedCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
