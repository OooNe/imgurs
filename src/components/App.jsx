import React from 'react';
import ReactDOM from 'react-dom';
import DevTool from 'mobx-react-devtools';

import Home from './Home';
import NavigationBar from './NavigationBar';

class App extends React.Component {
    render() {
        const style = {
            paddingTop: '80px',
            background: '#000',
            minHeight: '100vh'
        };

        return (
            <div className="container-fluid" style={style}>
                <NavigationBar store={this.props.route.imgurStore}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App
