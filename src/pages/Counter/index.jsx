// @flow

import React from 'react';
import Button from 'tvg-ui-bootstrap/components/Buttons';
import Input from 'tvg-ui-bootstrap/components/Form/Input';

import styles from './styles.css';


module.exports = ({ value = 0, onIncrement, onDecrement }) => (
  <div className={styles.counter}>
    <Button onClick={onIncrement}>+</Button>
    <Button onClick={onDecrement}>-</Button>
    <Input type="number" value={value} />
  </div>
);
