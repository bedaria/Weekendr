import React, { Component } from 'react';

class QuizListItem extends Component {
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
        <img src={this.props.src} />
      </div>
    );
  }
}

export default QuizListItem;
