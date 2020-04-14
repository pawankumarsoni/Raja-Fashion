import { all } from 'redux-saga/effects';

import loginSaga from './Login';
import registerSaga from './Register';

export default function* root() {
  yield all([
    loginSaga(),
    registerSaga()
  ]);
}
