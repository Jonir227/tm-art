import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { postSignIn, putSingUp } from '../../api/Auth';
import Storage from '../../utils/Storage';
import {
  IPostSignInActionCreators,
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

function* postSignInSaga({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    yield put<IPostSignInReqeust>(IPostSignInActionCreators.request());
    const { token, nickName } = yield call(postSignIn, username, password);
    yield put<IPostSignInSuccess>(
      IPostSignInActionCreators.success(username, nickName),
    );
    yield call(Storage.setItem, 'jwt', token);
  } catch (err) {
    yield put<IPostSignInFailure>(IPostSignInActionCreators.failure(err));
  }
}

/* watcher */
function* watchPutSignUpSaga() {
  yield takeEvery(PUT_SIGN_UP, putSingUpSaga);
}

function* authSaga() {
  while (true) {
    const { payload } = yield take(SIGN_IN);
    yield fork(postSignInSaga, payload);
    const { action } = yield take([SIGN_OUT, SIGN_IN_FAILURE]);
    yield call(Storage.deleteItem, 'jwt');
    if (action.type === SIGN_OUT) {
      yield put({ type: SIGN_OUT });
    }
  }
}

/* root */
export default function* rootAuthSaga() {
  yield all([fork(watchPutSignUpSaga), fork(authSaga)]);
}
