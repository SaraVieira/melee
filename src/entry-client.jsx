// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Deposit as SightlineDeposit } from './Sightline';


export default render(<SightlineDeposit />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./Sightline', () => render(
    <Router>
      <SightlineDeposit user={{ accountId: 1, email: 'hello@mindera.com' }} />
    </Router>,
    document.getElementById('app'),
  ));
}
