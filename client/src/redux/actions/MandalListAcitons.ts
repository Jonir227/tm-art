import { Action } from 'redux';
import { IGetMandalListSuccessAPI } from '../../api/Mandal';
import IAPIAction from '../../types/APIAction';
import {
  GET_MANDAL_LIST,
  GET_MANDAL_LIST_FAILURE,
  GET_MANDAL_LIST_REQUEST,
  GET_MANDAL_LIST_SUCCESS,
} from '../actionTypes/MandalListAcitonsTypes';

/*
  =========================================
              ExposedAcitons
  =========================================
*/

const actionCreatorsForComponent = {
  getMandalList: () => ({ type: GET_MANDAL_LIST }),
};

export default actionCreatorsForComponent;

/*
  =========================================
              getMandalArt
  =========================================
*/

/* 만달 리스트 리퀘스트 */
export interface IGetMandalListRequest extends Action {
  type: typeof GET_MANDAL_LIST_REQUEST;
}

export const getMandalListRequest = (): IGetMandalListRequest => ({
  type: GET_MANDAL_LIST_REQUEST,
});

/* 만달 리스트 리퀘스트 성공 */
export interface IGetMandalListSuccess extends Action {
  type: typeof GET_MANDAL_LIST_SUCCESS;
  payload: IGetMandalListSuccessAPI;
}

export const getMandalListSuccess = (
  payload: IGetMandalListSuccessAPI,
): IGetMandalListSuccess => ({
  type: GET_MANDAL_LIST_SUCCESS,
  payload,
});

/* 만달 리스트 리퀘스트 실패 */
export interface IGetMandalLIstFailure extends Action {
  type: typeof GET_MANDAL_LIST_FAILURE;
}

export const getMandalListFailure = (): IGetMandalLIstFailure => ({
  type: GET_MANDAL_LIST_FAILURE,
});

/* 만달 리스트 액션 크리에이터 */
export const getMandalListActionCreators: IAPIAction = {
  request: getMandalListRequest,
  success: getMandalListSuccess,
  failure: getMandalListFailure,
};

export type MandalListActions =
  | IGetMandalListRequest
  | IGetMandalListSuccess
  | IGetMandalLIstFailure;
