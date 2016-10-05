import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import { answerQuestion, postQuestionListInput } from '../actions/quizActions';
import QuizOption from '../components/QuizOption';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.renderQuiz = this.renderQuiz.bind(this);
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onAnswerClicked(answer) {
    this.props.answerQuestion(answer, this.props);
  }

  onClick() {
    browserHistory.push('/destination');
  }

  renderQuestion() {
    if (this.props.quizData.length === this.props.questionIndex) {
      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }

      return (
        <div>
          <h5>Thanks for providing your trip preferences.</h5>
        </div>
      );
    }

    const question = this.props.quizData[this.props.questionIndex].question;

    return (
      <h5><strong>{question}</strong></h5>
    );
  }

  renderQuiz() {
    if (this.props.quizData.length === this.props.questionIndex) {
      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }

      return (
        <div>
          <h5>You're almost there! Next, select your desired destination.</h5>
          <Button onClick={this.onClick} bsStyle="primary">See trip results</Button>
        </div>
      );
    }

    const arr = this.props.quizData[this.props.questionIndex].options;

    return arr.map((q) => {
      return (
        <QuizOption
          key={q.id}
          option={q.option}
          src={q.imageUrl}
          onAnswerClicked={this.onAnswerClicked}
        />
      );
    });
  }

  render() {
    return (
      <div className="quiz">
        {this.renderQuestion()}
        {this.renderQuiz()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizData: state.quiz.quizData,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    coordinates: state.coordinates.coordinates,
    userInputForm: state.userInput.userInputForm,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerQuestion, postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
