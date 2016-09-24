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
    this.props.answerQuestion(answer, this.props);
  }

  renderQuiz() {
    if (this.props.quizList.length === this.props.questionIndex) {
      const dummyData = {
        "JSON": ['1', '2', '3']
      };
      
      this.props.postQuestionListInput(dummyData);

      return (
        <div>
          <p>You have completed the quiz!</p>
        </div>
      );
    }

    const arr = this.props.quizList[this.props.questionIndex].options;

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
  return {
    quizList: state.quiz.quizList,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerQuestion: answerQuestion, postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
