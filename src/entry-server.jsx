// @flow

import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import type { $Request, $Response } from 'express';

import { Deposit as SightlineDeposit } from './Sightline/';

export function render(req: $Request, res: $Response): string {
  return ReactDOMServer.renderToString(
    <Router location={req.url} context={{ req, res }}>
      <SightlineDeposit user={{ accountId: 1, email: 'hello@mindera.com' }} />
    </Router>,
  );
}

export function renderError(req: $Request, res: $Response): string {
  // @TODO Find a decent error page
  return ReactDOMServer.renderToString(
    <Router location={req.url} context={{ req, res }}>
      <SightlineDeposit user={{ accountId: 1, email: 'hello@mindera.com' }} />
    </Router>,
  );
}
