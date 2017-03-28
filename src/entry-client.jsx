// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sightline from './Sightline';

export default render(
  <Router>
    <Sightline user={{ accountId: 1, email: 'hello@mindera.com' }} />
  </Router>,
  document.getElementById('root'),
);
