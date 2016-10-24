import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
	setCategory(category) {
		this.props.store.setCategory(category)
	}

	render() {
		return (
			<h1>
				<Link to="/">Appka</Link>
				<a href="#" onClick={() => {this.setCategory('cosplay')}}>Cosplay</a>
				<a href="#" onClick={() => {this.setCategory('funny')}}>Funny</a>
				<a href="#" onClick={() => {this.setCategory('gaming')}}>Gaming</a>
			</h1>
		)
	}
}

export default NavigationBar;
