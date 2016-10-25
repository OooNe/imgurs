import React from 'react';
import {observer} from 'mobx-react';

import CommentsList from './Comments';

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

        const textStyle = {
            color: '#FFF'
        };

        const style = {
            backgroundColor: '#000',
            border: '5px solid #FFF',
            borderRadius: 0,
        };

        return (
            <article className="row">
                <section className="thumbnail" style={style}>
                    <header className="caption">
                        <h3 style={textStyle}>{currentImgur.title}</h3>
                        <h4 style={textStyle}>{currentImgur.description}</h4>
                    </header>
                    <img src={currentImgur.link} />
                </section>

                <CommentsList comments={currentComments} />
            </article>
        )
    }
}