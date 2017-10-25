import React from 'react';
import { Router, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';
import {getCountries} from './actions/actions-countries';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>       
        </Router>
    </Provider>,
    document.getElementById('root')    
);

store.dispatch(getCountries(1));
store.dispatch(getCountries(2));


        