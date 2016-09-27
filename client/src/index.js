import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './routes';
// reducers
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleWare(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app')
);
