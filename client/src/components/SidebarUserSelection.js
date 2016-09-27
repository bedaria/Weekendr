import React, { Component } from 'react';

export default class SidebarUserSelection extends Component {
  constructor(props) {
    super(props);
    // this.changePreference = this.changePreference.bind(this)
  }
  // changePreference() {
  //   console.log('we are inside changePreference: ',this.props)
  //   this.props.onChangePreference(this.props.option)
  // }
  render() {
    return (
      <div>
        <h6>{this.props.title}</h6>
        <img className="sidebar-user-selection-img" src={this.props.src} />
        <p>{this.props.answer}</p>
      </div>
    );
  }
}
