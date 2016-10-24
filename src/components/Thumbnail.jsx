import React from 'react';
import { Link } from 'react-router'

export default class Thumbnail extends React.Component {
	render() {
        const thumbnail = this.props.thumbnail;

        const imageStyle = {
            paddingBottom: `${thumbnail.ratio * 100}%`,
            backgroundImage: `url(${thumbnail.thumbnail})`,
            backgroundSize: 'cover'
        };

		return (
            <div className="col-xs-3">
                <Link to={`/${thumbnail.id}`} className="thumbnail" style={imageStyle}>
                </Link>
            </div>
		)
	}
}