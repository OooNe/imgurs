import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Gag from './components/Gag';

export default(store) => {
	return (
		<Route path="/" component={App} _9gagStore={store}>
			<IndexRoute component={Home} _9gagStore={store} />
			<Route path="/:id" component={Gag} _9gagStore={store} />
		</Route>
	)
}
