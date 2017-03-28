// @flow

import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import type { $Request, $Response } from 'express';

import Sightline from './Sightline';
import html from './index.html';
import type { Manifest } from './index.html';

export function render(
  req: $Request,
  res: $Response,
  manifest: Manifest,
): Promise<string> {
  return Promise.resolve(html({
    title: 'webpack',
    head: '',
    body: ReactDOMServer.renderToString(
      <Router location={req.url} context={{ req, res }}>
        <Sightline user={{ accountId: 1, email: 'hello@mindera.com' }} />
      </Router>,
    ),
    manifest,
  }));
}

export function renderError(
  req: $Request,
  res: $Response,
): Promise<string> {
  return Promise.resolve(html({
    title: 'webpack',
    head: '',
    body: ReactDOMServer.renderToString(
      <Router location={req.url} context={{ req, res }}>
        <Sightline user={{ accountId: 1, email: 'hello@mindera.com' }} />
      </Router>),
    chunks: [],
  }));
}
