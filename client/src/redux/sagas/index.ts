import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import MandalListSagas from './MandalListSagas';

export default function* rootSaga(): SagaIterator {
  yield all([fork(MandalListSagas)]);
}
