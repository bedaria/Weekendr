import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/App';
import Home from './components/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
import QuizList from './containers/Quiz_List'
// import TripResults from './components/TripResults';
import UserProfile from './containers/UserProfile';

//routes to be added:
// <Route path="/signup" component={Signup} />
// <Route path="/login" component={Login} />
// <Route path="/trip-results" component={TripResults} /> 

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/quiz" component={QuizList} />
    <Route path="/profile" component={UserProfile} />
  </Route>
);

export default routes;
