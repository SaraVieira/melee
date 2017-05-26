// @flow

import React from 'react';
import { Route, Link } from 'react-router-dom';

import type { Element } from 'react';

import About from './About';
import Menu from './Menu';
import Counter from './Counter';
import Main from './Main';

import styles from './styles.css';

export default (): Element<*> => (
  <div className={styles.root}>
    <Link to="/">Home</Link>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
    <Route path="/about" component={About} />
    <Route path="/menu" component={Menu} />
    <Route path="/counter" component={Counter} />
    <Route path="/" component={Main} />
  </div>
);
