import React from 'react';

export default class About extends React.Component {
	render() {
        const { _9gagStore } = this.props.route;
        
		return (
            <div>
                {_9gagStore._9gags.map(item => (
                    item.title
                ))}
            </div>
		)
	}
}