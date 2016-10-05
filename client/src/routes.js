import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Preferences from './components/Preferences';
import DestinationView from './components/DestinationView';
import BundleView from './components/BundleView';
import UserProfile from './containers/UserProfile';
import Signup from './containers/Signup';
import Login from './containers/Login';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/preferences" component={Preferences} />
    <Route path="/destination" component={DestinationView} />
    <Route path="/trip-bundles" component={BundleView} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Route>
);

export default routes;
