import React from 'react';
import ReactDOM from 'react-dom';
import DevTool from 'mobx-react-devtools';

import Home from './Home';
import NavigationBar from './NavigationBar';

class App extends React.Component {
    render() {
        const style = {
            paddingTop: '80px'
        }

        return (
            <div className="container" style={style}>
                <DevTool/>
                <NavigationBar store={this.props.route.imgurStore}/>
                {this.props.children}
            </div>
        );
    }
}

export default App
