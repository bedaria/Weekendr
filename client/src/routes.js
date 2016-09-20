import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Quiz from './components/Quiz';
// import TripResults from './components/TripResults';
// import UserProfile from './components/UserProfile';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/* <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/trip-results" component={TripResults} />
    <Route path="/:user/profile" component={UserProfile} /> */}
  </Route>
);

export default routes;
