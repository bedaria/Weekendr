import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Landing from './components/Landing';
import  reducers  from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Landing />
  </Provider>
  , document.querySelector('.container'));
