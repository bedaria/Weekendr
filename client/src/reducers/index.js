import { combineReducers } from 'redux'

import questionsReducer from './questionsReducer';
import activeQuestionReducer from './activeQuestionReducer';
import receivedReducer from './receivedReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  activeQuestion: activeQuestionReducer,
  received: receivedReducer
});

export default rootReducer;
