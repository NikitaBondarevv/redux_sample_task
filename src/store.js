import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const rootReducers = combineReducers(reducers);

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// second argument is used to add redux dev tool (should be pre-installed in browser)
