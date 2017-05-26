// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Element } from 'react';
import type { ActionCreator } from 'redux';

import * as actions from './actions';
import type { IncrementAction, DecrementAction } from './actions';
import type { State } from '../../reducers';
import type { State as CounterState } from './reducers';

import styles from './styles.css';

type Props = {
  value: number,
  onIncrement: ActionCreator<IncrementAction, *>,
  onDecrement: ActionCreator<DecrementAction, *>,
};

const mapStateToProps = (state: State): CounterState => state.counter;

const mapDispatchToProps = {
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
};

const Counter = ({
  onIncrement,
  onDecrement,
  value = 6,
}: Props): Element<*> => (
  <div className={styles.counter}>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <input type="number" value={value} />
    <p>Value in store is: {value}</p>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
