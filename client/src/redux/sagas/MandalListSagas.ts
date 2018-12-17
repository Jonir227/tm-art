import { all, fork, takeEvery } from 'redux-saga/effects';
import { getMandalList } from '../../api/Mandal';
import { getMandalListActionCreators } from '../actions/MandalListAcitons';
import { GET_MANDAL_LIST } from '../actionTypes/MandalListAcitonsTypes';
import apiSagaTemplate from './apiSagaTemplate';

/* SAGAS */

const getMandalListSaga = apiSagaTemplate.bind(
  null,
  getMandalListActionCreators,
  getMandalList,
);

/* WATCHERS */

function* watchGetMandalListSaga() {
  yield takeEvery(GET_MANDAL_LIST, getMandalListSaga);
}

/* ROOT */

function* rootMandalListSaga() {
  yield all([fork(watchGetMandalListSaga)]);
}

export default rootMandalListSaga;
