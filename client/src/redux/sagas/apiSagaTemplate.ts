import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import IAPIAction from '../../types/APIAction';

export default function* apiSagaTemplate<T>(
  actionCreators: IAPIAction,
  apifn: (...args: any) => Promise<any>,
  payload: any | undefined,
): SagaIterator {
  try {
    yield put(actionCreators.request());
    const data = yield call(apifn, payload);
    yield put(actionCreators.success(data));
  } catch (error) {
    yield put(actionCreators.failure(error));
  }
}
