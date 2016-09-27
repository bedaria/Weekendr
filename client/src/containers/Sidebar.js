import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postQuestionListInput } from '../actions/index';
import SidebarUserInput from '../components/SidebarUserInput';
import SidebarPreferenceItem from '../components/SidebarPreferenceItem';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderSidebarUserInput = this.renderSidebarUserInput.bind(this);
    this.renderSidebarPreferenceItems = this.renderSidebarPreferenceItems.bind(this);
  }

  renderSidebarUserInput() {
    return (
      <SidebarUserInput
        budget={this.props.userInputForm && this.props.userInputForm.budget}
        numTravelers={this.props.userInputForm && this.props.userInputForm.numTravelers}
        date={this.props.userInputForm && this.props.userInputForm.date}
      />
    );
  }

  renderSidebarPreferenceItems() {
    return this.props.quizAnswers.map((q, index) => {
      return (
        <SidebarPreferenceItem
          key={index}
          title={q.title}
          src={q.option.imageUrl}
          answer={q.option.option}
        />
      );
    });
  }

  render() {
    return (
      <div className="sidebar">
        <h5>Sidebar</h5>
        <div className="sidebar-user-input">
          {this.renderSidebarUserInput()}
        </div>
        <div className="SidebarPreferences">
          {this.renderSidebarPreferenceItems()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizList: state.quiz.quizList,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    userInputForm: state.userInput.userInputForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
