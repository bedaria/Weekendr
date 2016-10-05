import React, { Component } from 'react';
import { connect } from 'react-redux';
import BundleListItem from '../components/BundleListItem';

class BundleList extends Component {
  constructor(props) {
    super(props);
    this.renderBundles = this.renderBundles.bind(this);
  }

  renderBundles() {
    return this.props.selectedCity.data.map((city, index) => {
      return (
        <BundleListItem
          key={index}
          cityName={city.name}
          population={city.population}
          lat={city.lat}
          lng={city.lng}
        />
      );
    });
  }

  render() {
    return (
      <div className="bundle-list">
        <h5>Select a trip bundle:</h5>
        {this.renderBundles()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity,
  };
}

export default connect(mapStateToProps)(BundleList);
