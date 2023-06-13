import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

const HtmlTemplate = () => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <title>React App</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="manifest" href="/favicon.ico">
            <script src="http://localhost:3000/main.js"></script>
            </head>
            <body>
            <div id="root">${renderToString(<App />)}</div>
            <!-- Add your script tags or other dependencies here -->
            </body>
        </html>
        `
}

export default HtmlTemplate