import { combineReducers } from 'redux'
import quizReducer from './reducer_Quiz';
import activeQuestion from './reducer_active_Question';
import receivedReducer from './reducer_received';

const rootReducer = combineReducers({
	quiz: quizReducer,
	activeQuestion: activeQuestion,
	received: receivedReducer
});

export default rootReducer;