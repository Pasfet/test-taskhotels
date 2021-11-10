import { put, takeEvery, call } from 'redux-saga/effects';
import { setHotels } from '../hotelsReducer/hotelsReducer';
import { FETCH_HOTELS } from '../types/hotelsPageTypes';

function* fetchHotelsWorker(params) {
  const { location, checkIn, checkOut } = params.payload;
  const list = yield call(() =>
    fetch(
      `https://engine.hotellook.com/api/v2/cache.json?location=${location.value}&currency=rub&checkIn=${checkIn.value}&checkOut=${checkOut.value}&limit=10`,
    )
      .then(response => response.json())
      .catch(e => console.log(e))
      .then(data => data),
  );
  yield put(setHotels(list));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker);
}
