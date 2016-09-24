import React, { Component } from 'react';

class QuizListItem extends Component {
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
        <h4>{this.props.title}</h4>
        <img src={this.props.src} />
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

export default QuizListItem;
