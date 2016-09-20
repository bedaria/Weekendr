import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk';

import routes from './routes';
import Landing from './components/Landing';

import reducers  from './reducers';


const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore)
const storey = createStoreWithMiddleWare(reducers)


ReactDOM.render(
  <Provider store={storey}>
    <Router history={browserHistory}> 
    	{routes} 
    </Router>
  </Provider>
  , document.querySelector('.container'));
