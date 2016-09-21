import { combineReducers } from 'redux'

import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import activeQuestionReducer from './activeQuestionReducer';
import receivedReducer from './receivedReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer,
  activeQuestion: activeQuestionReducer,
  received: receivedReducer
});

export default rootReducer;
