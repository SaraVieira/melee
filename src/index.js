// @flow

import React from 'react';
import {render} from 'react-dom'

import conf from 'tvg-conf';
import mediator from 'tvg-mediator';

if (false) {
  console.log('SO APARECE SE FOR PRODUCTION');
}

export default render(<h1>Hello World</h1>, document.getElementById('app'))
