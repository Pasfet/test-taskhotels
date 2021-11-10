import { all } from 'redux-saga/effects';
import { hotelsWatcher } from './hotelsActions';
import { logInWatcher, logOutWatcher } from './authActions';

export function* rootWatcher() {
  yield all([hotelsWatcher(), logInWatcher(), logOutWatcher()]);
}
