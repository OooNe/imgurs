import React from 'react';
import { Link } from 'react-router'

export default class Thumbnail extends React.Component {
    getRandomColor() {
        const colors = ['#2ecc71', '#8e44ad', '#e67e22', '#f39c12'];        

        return colors[Math.floor(Math.random() * colors.length)];
    }

	render() {
        const thumbnail = this.props.thumbnail;

        const imageStyle = {
            paddingBottom: `${thumbnail.ratio * 100}%`,
            backgroundImage: `url(${thumbnail.thumbnail})`,
            backgroundSize: 'cover',
            borderRadius: 0,
            border: '5px solid #FFF',
            backgroundColor: this.getRandomColor(),
        };

		return (
            <div className="col-xs-3">
                <Link to={`/${thumbnail.id}`} className="thumbnail" style={imageStyle}>
                </Link>
            </div>
		)
	}
}