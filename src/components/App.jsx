import React from 'react';
import ReactDOM from 'react-dom';
import DevTool from 'mobx-react-devtools';

import Home from './Home';
import NavigationBar from './NavigationBar';

class App extends React.Component {
	render() {
		const {guestStore} = this.props.route;

		return (
			<div className="container">
				<DevTool/>
				<NavigationBar/>
				{this.props.children}
			</div>
		);
	}
}

export default App
