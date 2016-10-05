import { combineReducers } from 'redux';
import quizReducer from './reducer_quiz';
import userProfileReducer from './reducer_userProfile';
import userInputReducer from './reducer_userInput';
import coordinatesReducer from './reducer_coordinates';
import receivedCitiesReducer from './reducer_receivedCities';
import selectedCityReducer from './reducer_selectedCity';

const rootReducer = combineReducers({
  quiz: quizReducer,
  user: userProfileReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer,
  receivedCities: receivedCitiesReducer,
  selectedCity: selectedCityReducer,
});

export default rootReducer;
