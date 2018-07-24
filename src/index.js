import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import Router from './routes';
import Store from './store';

import 'antd/dist/antd.css';
import 'react-day-picker/lib/style.css';

ReactDOM.render((
    <CookiesProvider>
        <Provider store={Store}>
            <Router/>
        </Provider>
    </CookiesProvider>
    ),document.getElementById('root')
);