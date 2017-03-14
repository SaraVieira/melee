// @flow

import React from 'react';
import Video from 'tvg-ui-bootstrap/components/Video';
import styles from './styles.css';

export default () => (
  <div>
    <h1 className={styles.other}>Other</h1>
    <Video streamName="rosecroft_mbr"/>
  </div>
)
