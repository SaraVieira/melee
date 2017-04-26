// @flow

export type DecrementAction = { type: 'COUNTER_DECREMENT' };
export type IncrementAction = { type: 'COUNTER_INCREMENT' };

export type Action = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: 'COUNTER_INCREMENT' });

export const decrement = (): DecrementAction => ({ type: 'COUNTER_DECREMENT' });
