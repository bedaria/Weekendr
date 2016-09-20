import React from 'react';
import { Route, IndexRoute , IndexRedirect} from 'react-router';
import Landing from './components/Landing.js';
// import QuestionList from './containers/Question_List';

const routes =  (
	<Route path="/" component={Landing}>
	</Route>
	)

export default routes;