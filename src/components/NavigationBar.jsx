import React from 'react'
import { Link } from 'react-router'
import {observer} from 'mobx-react';

@observer
class NavigationBar extends React.Component {
    setCategory(category) {
        this.props.store.setCategory(category)
    }

    render() {
        const imgurStore = this.props.store;

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">ImgurView</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {imgurStore.categories.map((category, index) => (
                                <li className={imgurStore.category === category ? 'active' : ''}>
                                    <Link to="/" onClick={() => {this.setCategory(category)}}>{category}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar;
