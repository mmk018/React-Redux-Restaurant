
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestToServiceContext from './components/resto-service-context';
import store from './store';


import './index.scss';

const restoService = new RestoService();


ReactDOM.render(
    <Provider store={store} >
        <ErrorBoundry>
            <RestToServiceContext.Provider value={restoService}>
                <Router>
                   
                <App></App>
                </Router>
            </RestToServiceContext.Provider>
        </ErrorBoundry>

    </Provider>
    , document.getElementById('root'));

