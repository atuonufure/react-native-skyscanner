import { all } from 'redux-saga/effects';

import { flightsWatcher } from './flightSaga';

export function* rootWatcher() {
  yield all([flightsWatcher()]);
}
