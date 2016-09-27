import React, { Component } from 'react';

export default class QuizOption extends Component {
  constructor(props) {
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer() {
    this.props.onAnswerClicked(this.props.option);
  }

  render() {
    if (!this.props.option) {
      return <div>Select an option:</div>;
    }

    return (
      <div onClick={this.selectAnswer}>
        <h4>{this.props.option}</h4>
        <img className="quiz-option-img" src={this.props.src} />
      </div>
    );
  }
}
