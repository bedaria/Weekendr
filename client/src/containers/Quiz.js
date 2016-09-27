import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { answerQuestion, postQuestionListInput } from '../actions/quizActions';
import QuizOption from '../components/QuizOption';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.renderQuiz = this.renderQuiz.bind(this);
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    this.props.answerQuestion(answer, this.props);
  }

  renderQuiz() {
    if (this.props.quizList.length === this.props.questionIndex) {
      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }

      return (
        <div>
          <p>You have completed the quiz!</p>
        </div>
      );
    }

    const arr = this.props.quizList[this.props.questionIndex].options;

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
        <h5>Preferences Quiz</h5>
        {this.renderQuiz()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizList: state.quiz.quizList,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    coordinates: state.coordinates.coordinates,
    userInputForm: state.userInput.userInputForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerQuestion, postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
