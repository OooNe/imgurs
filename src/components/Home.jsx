import React from 'react';
import {observer} from 'mobx-react';

import Thumbnail from './Thumbnail';

@observer 
export default class About extends React.Component {
	render() {
        const { _9gagStore } = this.props.route;
        
		return (
            <div className="row">
                {_9gagStore._9gags.map(item => (
                    <Thumbnail key={item.id} thumbnail={item} />
                ))}
            </div>
		)
	}
}