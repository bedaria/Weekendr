import { combineReducers } from 'redux'
import userReducer from './userReducer';
import quizData from './QuizData';
import quizReducer from './reducer_Quiz';
import receivedReducer from './reducer_Received';
import userInputReducer from './userInputReducer'

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  received: receivedReducer,
  userInput: userInputReducer
})

export default rootReducer;
