import CSSModules from 'react-css-modules'
import {container, jumbotron, buttons} from 'bootstrap-css'
import React from 'react'
import ReactDOM from 'react-dom'
import DevTool from 'mobx-react-devtools'
import {observer} from 'mobx-react'

import Home from './Home'
import NavigationBar from './NavigationBar'

@observer
class App extends React.Component {
	render() {
		const {guestStore} = this.props.route
		return (
			<div>
				<DevTool/>
				<NavigationBar/>
				{this.props.children}
			</div>
		);
	}
}

export default App
