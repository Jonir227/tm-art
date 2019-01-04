import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { postSignIn, putSingUp } from '../../api/Auth';
import Storage from '../../utils/Storage';
import {
  IPostSignInFailure,
  IPostSignInReqeust,
  IPostSignInSuccess,
  putSignUpActionCreators,
} from '../actions/AuthActions';
import {
  PUT_SIGN_UP,
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from '../actionTypes/AuthActionTypes';
import apiSagaTemplate from './apiSagaTemplate';

/* sagas */

const putSingUpSaga = apiSagaTemplate.bind(
  null,
  putSignUpActionCreators,
  putSingUp,
);

function* postLoginSaga({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    yield put<IPostSignInReqeust>({ type: SIGN_IN_REQUEST });
    const { token, nickName } = yield call(postSignIn, username, password);
    yield put<IPostSignInSuccess>({ type: SIGN_IN_SUCCESS, payload: nickName });
    yield call(Storage.setItem, 'jwt', token);
  } catch (err) {
    yield put<IPostSignInFailure>({ type: SIGN_IN_FAILURE });
  }
}

function* authSaga() {
  while (true) {
    const { payload } = yield take(SIGN_IN);
    yield fork(postLoginSaga, payload);
    yield take([SIGN_OUT, SIGN_IN_FAILURE]);
    yield put({ type: SIGN_OUT });
  }
}

function* watchPutSignUpSaga() {
  yield takeEvery(PUT_SIGN_UP, putSingUpSaga);
}

export default function* rootAuthSaga() {
  yield all([fork(watchPutSignUpSaga), fork(authSaga)]);
}
