import { combineReducers } from 'redux'
import QuestionReducer from './reducer_Questions';
import activeQuestion from './reducer_active_Question';

const rootReducer = combineReducers({
	questions: QuestionReducer,
	activeQuestion: activeQuestion
});

export default rootReducer;