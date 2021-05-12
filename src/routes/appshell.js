import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import handlebars from 'handlebars';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../public/theme.js';
import App from '../public/components/app.js';

const router = Express.Router();

router.get('*', (req, res) => {
    const sheets = new ServerStyleSheets();

    const content = ReactDOMServer.renderToString(
        sheets.collect(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        )
    );

    const hbsTemplate = handlebars.compile(`
        <html>
            <head>
                <title>Cardano Jima!</title>
                <style id="css-server-side">{{{css}}}</style>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
            <body>
                <div id="app">{{{content}}}</div>
                <script src="/static/client.bundle.js" charset="utf-8"></script>
                <script src="/static/vendors~client.bundle.js" charset="utf-8"></script>
            </body>
        </html>`);

    const html = hbsTemplate({content: content, css: sheets.toString()});

    res.status(200).send(html);
}); 

export default router;