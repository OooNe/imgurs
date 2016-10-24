import React from 'react';

export default class Comment extends React.Component {
	render() {
        const comment = this.props.comment;

		return (
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
		)
	}
}