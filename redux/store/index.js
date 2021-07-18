import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import flightReducer from './flightReducer';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  flightReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
