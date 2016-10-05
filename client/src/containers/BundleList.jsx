import React, { Component } from 'react';
import { connect } from 'react-redux';
import BundleListItem from '../components/BundleListItem';

class BundleList extends Component {
  constructor(props) {
    super(props);
    this.renderBundles = this.renderBundles.bind(this);
  }

  renderBundles() {
    if(!this.props.selectedCity) {
      return <div>Loading...</div>;
    }

    return this.props.selectedCity.data.data.map((bundle, index) => {
      console.log("typeof bundle: ", bundle)
      const transport = bundle[0].transportation;
      var lodging = '';
      if(bundle[1].hotel) {
        lodging = bundle[1].hotel.name;
      } else if(bundle[1].airbnb) {
        lodging = bundle[1].airbnb;
      } else {
        lodging = bundle[1].lodging;
      }
      const activity1 = bundle[2].activity;
      const activity2 = bundle[3].activity;

      return (
        <BundleListItem
          key={index}
          transport={transport}
          lodging={lodging}
          activity1={activity1}
          activity2={activity2}
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
