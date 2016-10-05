import React, { Component } from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class BundleListItem extends Component {
  render() {
    return (
      <div>
        <Col sm={12} md={6} lg={4}>
          <Thumbnail>
            <h6><strong>{this.props.cityName}</strong></h6>
            <p>Transportation: {this.props.population}</p>
            <p>Lodging: {this.props.lat}</p>
            <p>Activities: {this.props.lng}</p>
            <p>
              <Button bsStyle="primary">Bundle Detail</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
