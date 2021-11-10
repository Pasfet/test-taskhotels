import { put, takeEvery } from 'redux-saga/effects';
import { logOutAC, setAuth } from '../authReducer/authReducer';
import { clearHotels } from '../hotelsReducer/hotelsReducer';
import { LOG_IN, LOG_OUT } from '../types/authTypes';

function* logInWorker({ payload }) {
  yield put(setAuth(payload));
}

function* logOutWorker() {
  yield put(logOutAC());
  yield put(clearHotels());
}

export function* logInWatcher() {
  yield takeEvery(LOG_IN, logInWorker);
}

export function* logOutWatcher() {
  yield takeEvery(LOG_OUT, logOutWorker);
}
