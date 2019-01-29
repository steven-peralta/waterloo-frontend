import React, {Component} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import CollapsibleNavbar from './components/CollapsibleNavbar';

export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <CollapsibleNavbar />
                <Router>
                    <Route path="/" component={Home} />
                </Router>
            </Provider>
        )
    }
}