import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import reportWebVitals from '../../reportWebVitals.js';
import { registerServiceWorker } from '../../serviceWorker';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker()