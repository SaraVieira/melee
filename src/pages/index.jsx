// @flow

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './About';
import Menu from './Menu';
import Other from './Other';

import styles from './styles.css';

export default (): React.Element<{}>  => (
  <div>
    <Link to='/'>Home</Link>
    <nav>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/other'>Other</Link></li>
      </ul>
    </nav>
    <Route path='/about' component={About} />
    <Route path='/menu' component={Menu} />
    <Route path='/other' component={Other} />
  </div>
);
