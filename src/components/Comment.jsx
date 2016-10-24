import React from 'react';

import { formatDate } from '../utils/utils';

export default class Comment extends React.Component {
	render() {
        const comment = this.props.comment;
        const timeStamp = comment.datetime * 1000;

		return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {comment.author}
                    <div className="pull-right">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {comment.ups} &nbsp;
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> {comment.downs} &nbsp;
                        {formatDate(timeStamp)}
                    </div>
                </div>
                <div className="panel-body">{comment.comment}</div>
            </div>
		)
	}
}