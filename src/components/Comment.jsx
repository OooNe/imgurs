import React from 'react';

import { formatDate } from '../utils/utils';

export default class Comment extends React.Component {
    render() {
        const comment = this.props.comment;
        const timeStamp = comment.datetime * 1000;

        const panelHeadingStyle = {
            color: '#FFF',
            backgroundColor: '#2c3e50',
            borderColor: '#7f8c8d'
        };

        const panelStyle = {
            color: '#FFF',
            backgroundColor: '#34495e',
            borderColor: '#7f8c8d'
        };

        return (
            <div className="panel" style={panelStyle}>
                <div className="panel-heading" style={panelHeadingStyle}>
                    <strong>{comment.author}</strong>
                    <div className="pull-right">
                        <span className="label label-success">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {comment.ups}
                        </span> &nbsp;
                        <span className="label label-danger">
                            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> {comment.downs}
                        </span> &nbsp;

                        <span className="label label-info">
                            <i className="fa fa-clock-o" aria-hidden="true"></i> {formatDate(timeStamp)}
                        </span>

                    </div>
                </div>
                <div className="panel-body">{comment.comment}</div>
            </div>
        )
    }
}