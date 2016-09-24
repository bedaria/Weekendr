import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { answerQuestion, postQuestionListInput } from '../actions/QuizList';
import QuizListItem from '../components/QuizListItem';

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.renderQuiz = this.renderQuiz.bind(this);
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    console.log('***we are inside onAnswerClicked: ', answer);
    this.props.answerQuestion(answer, this.props);
  }

  renderQuiz() {
    if (this.props.quizList.length === this.props.questionIndex) {
      console.log('***we are inside renderQuiz: ', this.props);
      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }
      return (
        <div>
          <p>You have completed the quiz!</p>
        </div>
      );
    }
    let arr = this.props.quizList[this.props.questionIndex].options;
    return arr.map((q) => {
      return (
        <QuizListItem
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
      <div className="QuizList Col-xs={4} xsOffset={2} md={4}">
        <h3>Preferences Quiz</h3>
        {this.renderQuiz()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state inside QuizList is', state)
  return {
    quizList: state.quiz.quizList,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    coordinates: state.coordinates.coordinates,
    userInputForm: state.userInput.userInputForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerQuestion: answerQuestion, postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
