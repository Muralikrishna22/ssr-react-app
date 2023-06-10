import React from 'react'
import App from '../client/app'
import { renderToString } from 'react-dom/server'



const HtmlTemplate = () => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <title>React App</title>
            <link href="/static/css/main.073c9b0a.css" rel="stylesheet">
            </head>
            <body>
            <div id="root">${renderToString(<App />)}</div>
            <!-- Add your script tags or other dependencies here -->
            </body>
        </html>
        `
}

export default HtmlTemplate