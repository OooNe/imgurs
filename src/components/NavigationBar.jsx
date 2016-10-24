import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
	setCategory(category) {
		this.props.store.setCategory(category)
	}

	render() {
		return (
			<h1>
				Appka
				<Link to="/" onClick={() => {this.setCategory('cosplay')}}>Cosplay</Link>
				<Link to="/" onClick={() => {this.setCategory('funny')}}>Funny</Link>
				<Link to="/" onClick={() => {this.setCategory('gaming')}}>Gaming</Link>
			</h1>
		)
	}
}

export default NavigationBar;
