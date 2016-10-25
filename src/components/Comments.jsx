import React from 'react';

import Comment from './Comment';

export default class Comments extends React.Component {
    render() {
        const comments = this.props.comments;

        return (
            <div>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        )
    }
}