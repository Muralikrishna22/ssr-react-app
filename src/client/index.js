import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import reportWebVitals from '../../reportWebVitals.js';
import { registerServiceWorker } from '../../serviceWorker';
import { Provider } from 'react-redux'
import store from '../store';
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from './routes';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrateRoot(document.getElementById('root'),
        <BrowserRouter>
            <Provider store={store}>
                <CustomRoutes />
            </Provider>
        </BrowserRouter>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker()