import { combineReducers } from 'redux'
import userReducer from './userReducer';
import quizListData from './QuizListData';
import quizListReducer from './reducer_QuizList';
import receivedReducer from './reducer_Received';
import userInputReducer from './userInputReducer';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizListReducer,
  received: receivedReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer
})

export default rootReducer;
