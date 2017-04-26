// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import type { $Request, $Response } from 'express';
import type { Store } from 'redux';
import configureStore from './configureStore';
import App from './pages';

type Response = {
  body: string,
  preloadedState: Store<*, *>,
};

export function render(req: $Request, res: $Response): Promise<Response> {
  return new Promise(resolve => {
    const preloadedState = configureStore();
    const body = renderToString(
      <Provider store={preloadedState}>
        <Router location={req.url} context={{ req, res }}>
          <App />
        </Router>
      </Provider>
    );

    return resolve({ body, preloadedState });
  });
}

export function renderError(req: $Request, res: $Response): string {
  // @TODO Find a decent error page
  return renderToString(
    <Router location={req.url} context={{ req, res }}>
      <App />
    </Router>
  );
}
