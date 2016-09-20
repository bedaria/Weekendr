import { combineReducers } from 'redux'
import QuestionReducer from './reducer_Questions';
import activeQuestion from './reducer_active_Question';
import receivedReducer from './reducer_received';

const rootReducer = combineReducers({
	questions: QuestionReducer,
	activeQuestion: activeQuestion,
	received: receivedReducer
});

export default rootReducer;