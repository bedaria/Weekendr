import axios from 'axios';

import {
  ANSWER_SELECTED,
  RECEIVED_DATA,
} from './actionTypes';

export function answerQuestion(answer, props) {
  let answerObj = {};
  answerObj.title = props.quizList[props.questionIndex].title;
  answerObj.option = props.quizList[props.questionIndex].options.filter((q) => {
    return q.option === answer;
  })[0];
  props.quizAnswers.push(answerObj);

  return {
    type: ANSWER_SELECTED,
    payload: { answers: props.quizAnswers, questionIndex: props.questionIndex + 1 }
  };
}

export function postQuestionListInput(props) {
  const options = {
    answers: props.quizAnswers,
    coordinates: props.coordinates,
    userInputForm: props.userInputForm
  };

  return (dispatch) => {
    axios.post('/api/search/getCity', options)
      .then((data) => {
        dispatch({
          type: RECEIVED_DATA,
          payload: data
        });
      })
      .catch(function(err) {
        console.log('error inside postQuestionListInput inside actions: ', err)
      });
  };
}
