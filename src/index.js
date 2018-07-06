import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './routes';
import Store from './store';


ReactDOM.render((
    <Provider store={Store}>
        <Router/>
    </Provider>
    ),document.getElementById('root')
);
