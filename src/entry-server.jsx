// @flow

import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import pify from 'pify';
import Root from './pages';
import html from './index.html';
import type { Manifest } from './index.html';

const phtml = pify(html);

export function render(
  req: express$Request,
  res: express$Response,
  manifest: Manifest,
): Promise<string> {
  return phtml({
    title: 'webpack',
    head: '',
    body: ReactDOMServer.renderToString(
      <Router location={req.url} context={{ req, res }}>
        <Root />
      </Router>),
    manifest,
  })
  .then(console.log)
  .catch(console.log);
}

export function renderError(
  req: express$Request,
  res: express$Response,
): Promise<string> {
  return phtml({
    title: 'webpack',
    head: '',
    body: ReactDOMServer.renderToString(
      <Router location={req.url} context={{ req, res }}>
        <Root />
      </Router>),
    chunks: [],
  });
}
