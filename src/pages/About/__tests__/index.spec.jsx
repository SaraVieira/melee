// @flow

import React from 'react';
import About from '../';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
  const element = <About />;
  expect(React.isValidElement(element)).toEqual(true);
});
