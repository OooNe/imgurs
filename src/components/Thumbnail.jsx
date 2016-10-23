import React from 'react';

export default class Thumbnail extends React.Component {
	render() {
		return (
            <div className="col-xs-3">
                <a href="#" className="thumbnail">
                    <img src={this.props.thumbnail.images.small} />
                </a>
            </div>
		)
	}
}