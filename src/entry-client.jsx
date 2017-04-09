// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './configureStore';
import App from './pages';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

const hotRender = (Component, store) => render(
  <Provider store={store}>
    <Router>
      <Component />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./pages', () => {
    System
      .import('./pages')
      .then(AppModule => hotRender(
        AppModule.default,
        configureStore(preloadedState),
      ));
    System
      .import('./configureStore')
      .then(configureStoreModule => hotRender(
        App,
        configureStoreModule.default(preloadedState),
      ));
  });
}

export default hotRender(App, configureStore(preloadedState));
