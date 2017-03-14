// @flow

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from './pages/index'

export default (): React.Element<{}> => (<Router><Root /></Router>);
