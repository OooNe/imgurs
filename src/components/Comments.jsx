import React from 'react';

import Comment from './Comment';

export default class Comments extends React.Component {
	render() {
        const comments = this.props.comments;

		return (
            <div>
                {comments.map(comment => (
                    <Comment comment={comment} />
                ))}
            </div>
		)
	}
}