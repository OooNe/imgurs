import React from 'react'
import { Link } from 'react-router'
import {observer} from 'mobx-react';

@observer
class NavigationBar extends React.Component {
	setCategory(category) {
		this.props.store.setCategory(category)
	}

	render() {
		const imgurStore = this.props.store;

		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link className="navbar-brand" to="/">Appka</Link>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className={imgurStore.category === 'cosplay' ? 'active' : ''}>
								<Link to="/" onClick={() => {this.setCategory('cosplay')}}>Cosplay</Link>
							</li>
							<li className={imgurStore.category === 'funny' ? 'active' : ''}>
								<Link to="/" onClick={() => {this.setCategory('funny')}}>Funny</Link>
							</li>
							<li className={imgurStore.category === 'gaming' ? 'active' : ''}>
								<Link to="/" onClick={() => {this.setCategory('gaming')}}>Gaming</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavigationBar;
