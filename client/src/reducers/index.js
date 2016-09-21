import { combineReducers } from 'redux'
import quizData from './QuizData';
import quizReducer from './reducer_Quiz';
import receivedReducer from './reducer_Received';

console.log('are we inside indexjs')

const rootReducer = combineReducers({
	quiz: quizReducer,
	received: receivedReducer
});

export default rootReducer;