import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class CityListItem extends Component {
  constructor(props) {
    super(props);
    this.selectCity = this.selectCity.bind(this);
  }

  selectCity() {
    this.props.onSelectCity(this.props, this.props.answers, this.props.userInputForm, this.props.coordinates);
    browserHistory.push('/trip-bundles');
    console.log('*** Check terminal to see Transportation/Lodging/Activities data received from receive controller ***');
  }

  render() {
    return (
      <div>
        <Col sm={12} md={6} lg={4}>
          <Thumbnail>
            <h6><strong>{this.props.cityName}</strong></h6>
            <p>Population: {this.props.population}</p>
            <p>Latitude: {this.props.lat}</p>
            <p>Longitude: {this.props.lng}</p>
            <p>
              <Button onClick={this.selectCity} bsStyle="primary">Select city</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
