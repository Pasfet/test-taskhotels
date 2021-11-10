import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootWatcher } from './actions/index';

import authReducer from './authReducer/authReducer';
import hotelImgReducer from './hotelImgReducer/hotelImgReducer';
import hotelsReducer from './hotelsReducer/hotelsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authPage: authReducer,
  hotelsImg: hotelImgReducer,
  hotelsPage: hotelsReducer,
});

const persistConfig = {
  key: 'hotels',
  storage,
  blackList: ['hotelsImg'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
