import React from 'react';

import Comment from './Comment';

export default class Comments extends React.Component {
    render() {
        const comments = this.props.comments;

        return (
            <section>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </section>
        )
    }
}