import React from 'react';
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './Routes'
import _9gagStore from './stores/9gagStore'

var store = new _9gagStore();


ReactDOM.render((
    <Router history={browserHistory} routes={routes(store)}>
    </Router>
), document.querySelector("#root"))
