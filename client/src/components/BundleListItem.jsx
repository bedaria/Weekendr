import React, { Component } from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class BundleListItem extends Component {
  render() {
    return (
      <div>
        <Col sm={12} md={6} lg={4}>
          <Thumbnail>
            <h6><strong>{this.props.cityName}</strong></h6>
            <p>Transportation: {this.props.transport}</p>
            <p>Lodging: {this.props.lodging}</p>
            <p>Activity 1: {this.props.activity1}</p>
            <p>Activity 2: {this.props.activity2}</p>
            <p>
              <Button bsStyle="primary">Bundle Detail</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
