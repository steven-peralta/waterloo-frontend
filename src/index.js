import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import swaggerClient from 'redux-swagger-client'
import state from './reducers';
import Root from './Root';
import {fetchArticlesList} from "./actions/apiActions";

const swaggerOpts = {url: "http://localhost:8000/schema/",
    requestInterceptor: (req) => {
        req.headers.Accept = '*/*';
    }
};

const enhancers = compose(
    applyMiddleware(
        thunk,
        swaggerClient(swaggerOpts)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(state, enhancers);


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
