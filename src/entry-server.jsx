// @flow

import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import type { $Request, $Response } from 'express';

import App from './pages';

export function render(req: $Request, res: $Response): string {
  return ReactDOMServer.renderToString(
    <Router location={req.url} context={{ req, res }}>
      <App />
    </Router>,
  );
}

export function renderError(req: $Request, res: $Response): string {
  // @TODO Find a decent error page
  return ReactDOMServer.renderToString(
    <Router location={req.url} context={{ req, res }}>
      <App />
    </Router>,
  );
}
