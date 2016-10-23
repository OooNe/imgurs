import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
	render() {
		return (
			<h1>
				<Link to="/">Appka</Link>
			</h1>
		)
	}
}

export default NavigationBar;
