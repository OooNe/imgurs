import React from 'react';
import {observer} from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-component';

import Thumbnail from './Thumbnail';
import Loader from './Loader';

@observer 
export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.route.imgurStore;
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        this.store.fetchData();
    }

    itemRender(item) { 
        return <Thumbnail key={Math.random() * 100000} thumbnail={item} />
    }
    
    render() {        
        return (
            <div className="row">
                <InfiniteScroll
                    next={this.fetchData}
                    hasMore={true}
                    loader={<Loader />}>
                    <Masonry>
                    {this.store.imgurs[this.store.category].map(item => (
                    ))}
                    </Masonry>
                </InfiniteScroll>
            </div>
        )
    }
}