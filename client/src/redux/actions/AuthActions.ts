import { Action } from 'redux';
import IAPIAction from '../../types/APIAction';
import {
  PUT_SIGN_UP,
  PUT_SIGN_UP_FAILURE,
  PUT_SIGN_UP_REQUEST,
  PUT_SIGN_UP_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actionTypes/AuthActionTypes';

/*
  =========================================
                ExposedActions
  =========================================
*/

const actionCreatorsForComponent = {
  putSignUp: (username: string, password: string, nickName: string) => ({
    type: PUT_SIGN_UP,
    payload: { username, password, nickName },
  }),
};

export default actionCreatorsForComponent;

/*
  =========================================
                putSignUp
  =========================================
*/

// inteface
export interface IPutSignUpRequest extends Action {
  type: typeof PUT_SIGN_UP_REQUEST;
}

export interface IPutSignUpSuccess extends Action {
  type: typeof PUT_SIGN_UP_SUCCESS;
  payload: {
    username: string;
    token: string;
    nickName: string;
  };
}
export interface IPutSignUpFailure extends Action {
  type: typeof PUT_SIGN_UP_FAILURE;
}

// actionCreators
export const putSignUpRequest = (): IPutSignUpRequest => ({
  type: PUT_SIGN_UP_REQUEST,
});

export const putSignUpSuccess = ({
  username,
  token,
  nickName,
}: {
  username: string;
  token: string;
  nickName: string;
}): IPutSignUpSuccess => ({
  type: PUT_SIGN_UP_SUCCESS,
  payload: { username, token, nickName },
});

export const putSignUpFailure = (): IPutSignUpFailure => ({
  type: PUT_SIGN_UP_FAILURE,
});

export const putSignUpActionCreators: IAPIAction = {
  request: putSignUpRequest,
  success: putSignUpSuccess,
  failure: putSignUpFailure,
};

/*
  =========================================
                putSignUp
  =========================================
*/

export interface IPostSignInReqeust extends Action {
  type: typeof SIGN_IN_REQUEST;
}

export interface IPostSignInSuccess extends Action {
  type: typeof SIGN_IN_SUCCESS;
  payload: { nickName: string };
}

export interface IPostSignInFailure extends Action {
  type: typeof SIGN_IN_FAILURE;
}

export type AuthActions =
  | IPutSignUpRequest
  | IPutSignUpSuccess
  | IPutSignUpFailure
  | IPostSignInReqeust
  | IPostSignInSuccess
  | IPostSignInFailure;
