import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './components/landing.js';



ReactDom.render((
	<Router history={browserHistory}>
		<Route path="/" component={Landing}/>
	</Router>
	), document.getElementById("app"));




