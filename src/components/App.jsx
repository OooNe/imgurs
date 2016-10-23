import React from 'react';
import ReactDOM from 'react-dom';
import DevTool from 'mobx-react-devtools';

import Home from './Home';
import NavigationBar from './NavigationBar';

class App extends React.Component {
	render() {
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
