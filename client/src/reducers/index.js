import { combineReducers } from 'redux'
import userReducer from './userReducer';
import quizListReducer from './reducer_QuizList';
import receivedCitiesReducer from './reducer_ReceivedCities';
import userInputReducer from './userInputReducer';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizListReducer,
  receivedCities: receivedCitiesReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer
})

export default rootReducer;
