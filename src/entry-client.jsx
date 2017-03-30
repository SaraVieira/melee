// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/';

const hotRender = Component => render(
  <Router>
    <Component />
  </Router>,
  document.getElementById('app'),
);

export default hotRender(App);

if (module.hot) {
  module.hot.accept('./pages/', () => hotRender(App));
}
