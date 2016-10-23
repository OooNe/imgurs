import React from 'react';
import { Link } from 'react-router'

export default class Thumbnail extends React.Component {
	render() {
		return (
            <div className="col-xs-3">
                <Link to={`/${this.props.thumbnail.id}`} className="thumbnail">
                    {!this.props.thumbnail.is_album ?
                        <img src={this.props.thumbnail.link} /> : 
                        <p>{this.props.thumbnail.title}</p>
                    }
                </Link>
            </div>
		)
	}
}