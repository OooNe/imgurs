import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './Routes';
import imgurStore from './stores/imgurStore';

const store = new imgurStore();

ReactDOM.render((
    <Router history={browserHistory} routes={routes(store)}>
    </Router>
), document.querySelector("#root"))
