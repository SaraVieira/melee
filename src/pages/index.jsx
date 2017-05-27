// @flow

import React from 'react';
import { Route, Link } from 'react-router-dom';

import type { Element } from 'react';

import About from './About';
import Counter from './Counter';
import Main from './Main';

import styles from './styles.css';

export default (): Element<*> => (
  <div className={styles.root}>
    <nav className={styles.menu}>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
    <Route path="/about" component={About} />
    <Route path="/counter" component={Counter} />
    <Route path="/" component={Main} />
  </div>
);
