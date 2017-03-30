// @flow

import React from 'react';
import type { Element } from 'react';
import { Route, Link } from 'react-router-dom';

import About from './About';
import Menu from './Menu';
import Other from './Other';

import styles from './styles.css';

export default (): Element<*> => (
  <div className={styles.root}>
    <Link to="/">Home</Link>
    <nav>
      <ul>
        <li><Link to="/about">About 2</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/other">Other</Link></li>
      </ul>
    </nav>
    <Route path="/about" component={About} />
    <Route path="/menu" component={Menu} />
    <Route path="/other" component={Other} />
  </div>
);
