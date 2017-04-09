// @flow

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import App from './pages';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

const store = createStore(reducers, preloadedState);

const hotRender = Component => render(
  <Router>
    <Provider store={store}>
      <Component />
    </Provider>
  </Router>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./pages', () => hotRender(App));
}

export default hotRender(App);
