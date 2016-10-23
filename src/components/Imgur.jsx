import React from 'react';

export default class Imgur extends React.Component {
	render() {
        const imgur = this.props.route.imgurStore.imgurs.filter(item => item.id === this.props.params.id)[0];

		return (
            <div className="row">
                <div className="thumbnail">
                    <img src='{gag.images.cover}' />
                    <div className="caption">
                        <h3></h3>
                    </div>
                </div>
            </div>
		)
	}
}