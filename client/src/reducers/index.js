import { combineReducers } from 'redux'
import userReducer from './userReducer';
import quizData from './QuizData';
import quizReducer from './reducer_Quiz';
import receivedReducer from './reducer_Received';
import userInputReducer from './userInputReducer';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  received: receivedReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer
})

export default rootReducer;
