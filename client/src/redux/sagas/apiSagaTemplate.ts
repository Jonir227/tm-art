import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { IDefaultAPIFailure } from '../../api/Mandal';
import IAPIAction from '../../types/APIAction';

export default function* apiSagaTemplate(
  actionCreators: IAPIAction,
  apifn: () => Promise<any | IDefaultAPIFailure>,
  payload: any = null,
): SagaIterator {
  try {
    yield put(actionCreators.request());
    const data = yield call(apifn, payload);
    yield put(actionCreators.success(data));
  } catch (error) {
    yield put(actionCreators.failure(error));
  }
}
