import React from 'react';
import { Router, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>         
        </Router>
    </Provider>,
    document.getElementById('root')
);


        