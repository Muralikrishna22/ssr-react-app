import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import HtmlTemplate from './htmlTemplate';

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

    const content = HtmlTemplate();
    res.status(200).send(content);
});

app.listen(port, () => {
    console.log('Running on 3000');
});
