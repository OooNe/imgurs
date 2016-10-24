import React from 'react';
import {observer} from "mobx-react";

@observer
export default class Imgur extends React.Component {
    componentDidMount() {
        this.props.route.imgurStore.currentImgur = {};
        this.props.route.imgurStore.currentComments = [];

        const id = this.props.params.id;
        this.props.route.imgurStore.fetchSingleImgur(id);
        this.props.route.imgurStore.fetchImgurComments(id);
    }

	render() {
        const { currentImgur, currentComments } = this.props.route.imgurStore;

		return (
            <div className="row">
                <div className="thumbnail">
                    <img src={currentImgur.link} />
                    <div className="caption">
                        <h3></h3>
                    </div>
                </div>

                {currentComments.map(comment => (
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {comment.author}
                            <div className="pull-right">
                                ups: {comment.ups} 
                                downs: {comment.downs}
                                {comment.datetime}
                            </div>
                        </div>
                        <div className="panel-body">{comment.comment}</div>
                    </div>
                ))}
            </div>
		)
	}
}