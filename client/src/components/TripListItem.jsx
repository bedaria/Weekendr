import React, { Component } from 'react';

export default class TripListItem extends Component{
  constructor(props){
    super(props);
    this.selectCity = this.selectCity.bind(this);
  }

  selectCity() {
    console.log('inside selectCity userInputForm: ', this.props.userInputForm)
    this.props.onSelectCity(this.props, this.props.answers, this.props.userInputForm);
  }

  render() {
    return (
      <div onClick={this.selectCity}>
        <h1>{this.props.cityName}</h1>
        <h2>{this.props.population}</h2>
        <h3>{this.props.id}</h3>
      </div>
    );
  }
}


