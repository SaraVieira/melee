// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import reducers from './reducers';

let composeEnhancers = compose;

if (DEVELOPMENT) {
  /* eslint-disable */
  composeEnhancers = (typeof window === 'object')
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) :
    compose;
  /* eslint-enable */
}

export default (initialState: *): Store<*, *> => {
  const middlewares = [];
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      }),
    );
  }


  return store;
};
