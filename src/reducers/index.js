// @flow
import { combineReducers } from 'redux';
import counter from '../pages/Counter/reducers';

import type { State as CounterState } from '../pages/Counter/reducers';

export type State = {
  root: {},
  counter: CounterState
};

export default combineReducers({
  root: (state = {}, action) => state,
  counter,
});
