import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import Landing from './components/Landing';
import  reducers  from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Landing />
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
