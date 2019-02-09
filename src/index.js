import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import state from './reducers';
import Root from './Root';
import Swagger from 'swagger-client';

const store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const opts = {
    headers: 'application/vnd.oai.openapi+json'
};

Swagger({url: "http://localhost:8000/schema/",
    requestInterceptor: (req) => {
        req.headers.Accept = opts.headers;
    }
}).then(client => {
    ReactDOM.render(<Root client={client} store={store}/>, document.getElementById('root'));
    console.log(client);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
