import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import HtmlTemplate from './htmlTemplate';
import { Provider } from 'react-redux'
import store from '../store';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { matchPath } from 'react-router-dom';
import CustomRoutes from '../client/routes';
import ROUTES from '../client/routes/routes';
import { setAxiosDefaults } from './middleware'

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use('/manifest.json', express.static(path.resolve(__dirname, '../../public/manifest.json')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {

    // localhost cache control 
    if (req.hostname == "localhost") {
        app.use(express.static(path.resolve(__dirname, '../../dist'), {
            setHeaders: (res, filePath) => {
                if (filePath.endsWith('.html') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
                    res.setHeader('Cache-Control', 'no-store');
                }
            }
        }));
    }

    setAxiosDefaults()
    const match = ROUTES.find((route) => matchPath(req.url, route.path));
    let data = match?.serverSideData(req, res, store)

    if (data) {
        let jsx = renderToString(
            <StaticRouter location={req.url}>
                <Provider store={store}>
                    <CustomRoutes />
                </Provider>
            </StaticRouter>
        )
        // let html = <HtmlTemplate jsx={jsx} />
        let html = HtmlTemplate(jsx)
        res.status(200).send(html);
    }
});

app.listen(port, () => {
    console.log('Running on 3000');
});
