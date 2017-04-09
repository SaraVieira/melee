// @flow

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import type { $Request, $Response } from 'express';

import App from './pages';
import reducers from './reducers';

export function render(req: $Request, res: $Response): { html: string, preloadedState: * } {
  const store = createStore(reducers);

  return {
    html: renderToString(
      <Router location={req.url} context={{ req, res }}>
        <Provider store={store} >
          <App />
        </Provider>
      </Router>,
    ),
    preloadedState: store.getState(),
  };
}

export function renderError(req: $Request, res: $Response): string {
  console.log('I SHOULD NOT BE HERE');
  // @TODO Find a decent error page
  return renderToString(
    <Router location={req.url} context={{ req, res }}>
      <App />
    </Router>,
  );
}
