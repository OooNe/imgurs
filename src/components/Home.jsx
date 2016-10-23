import React from 'react';
import {observer} from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-component';

import Thumbnail from './Thumbnail';

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

	render() {        
		return (
            <div className="row">
                <InfiniteScroll
                    next={this.fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                    <Masonry>
                    {this.store.imgurs.map(item => (
                        <Thumbnail key={item.id} thumbnail={item} />
                    ))}
                    </Masonry>
                </InfiniteScroll>
            </div>
		)
	}
}