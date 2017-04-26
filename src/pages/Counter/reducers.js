// @flow

import type { Action } from './actions';

export type State = {
  value: number,
};

export default (state: State = { value: 0 }, action: Action): State => {
  switch (action.type) {
    case 'COUNTER_DECREMENT':
      return {
        ...state,
        ...{ value: Math.max(state.value - 1, 0) },
      };
    case 'COUNTER_INCREMENT':
      return {
        ...state,
        ...{ value: Math.min(state.value + 1, 100) },
      };
    default:
      return state;
  }
};
