import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Imgur from './components/Imgur';

export default(store) => {
	return (
		<Route path="/" component={App} imgurStore={store}>
			<IndexRoute component={Home} imgurStore={store} />
			<Route path="/:id" component={Imgur} imgurStore={store} />
		</Route>
	)
}
