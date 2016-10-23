import React from 'react';

export default class Gag extends React.Component {
	render() {
        const gag = this.props.route._9gagStore._9gags.filter(item => item.id === this.props.params.id)[0];

		return (
            <div className="row">
                <div className="thumbnail">
                    <img src={gag.images.cover} />
                    <div className="caption">
                        <h3>{gag.caption}</h3>
                    </div>
                </div>
            </div>
		)
	}
}