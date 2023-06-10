import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import HtmlTemplate from './htmlTemplate';

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.get('/*', (req, res) => {
    const content = HtmlTemplate();
    return res.status(200).send(content);
});

app.listen(port, () => {
    console.log('Running on 3000');
});
