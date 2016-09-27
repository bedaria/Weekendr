import { combineReducers } from 'redux'
import userReducer from './userReducer';
import quizReducer from './reducer_quiz';
import receivedCitiesReducer from './reducer_ReceivedCities';
import userInputReducer from './userInputReducer';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  receivedCities: receivedCitiesReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer
})

export default rootReducer;
