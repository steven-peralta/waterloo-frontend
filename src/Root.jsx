import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/presentational/Header';

class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <div className="container">
                    <Router>
                        <Header />

                    </Router>
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;