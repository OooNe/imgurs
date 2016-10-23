import React from 'react';
import {observer} from 'mobx-react';

import Thumbnail from './Thumbnail';

@observer 
export default class About extends React.Component {
	render() {
        const { imgurStore } = this.props.route;
        
		return (
            <div className="row">
                {imgurStore.imgurs.map(item => (
                    <Thumbnail key={item.id} thumbnail={item} />
                ))}
            </div>
		)
	}
}