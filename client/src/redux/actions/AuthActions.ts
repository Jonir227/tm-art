import { Action } from 'redux';
import IAPIAction from '../../types/APIAction';
import {
  POST_SIGN_IN_FAILURE,
  POST_SIGN_IN_REQUEST,
  POST_SIGN_IN_SUCCESS,
  PUT_SIGN_UP,
  PUT_SIGN_UP_FAILURE,
  PUT_SIGN_UP_REQUEST,
  PUT_SIGN_UP_SUCCESS,
  SIGN_OUT,
} from '../actionTypes/AuthActionTypes';

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
                post Sign In
  =========================================
*/

export interface IPostSignInReqeust extends Action {
  type: typeof POST_SIGN_IN_REQUEST;
}

const postSingInRequest = (): IPostSignInReqeust => ({
  type: POST_SIGN_IN_REQUEST,
});

export interface IPostSignInSuccess extends Action {
  type: typeof POST_SIGN_IN_SUCCESS;
  payload: { nickName: string; username: string };
}

const postSingInSuccess = ({
  username,
  nickName,
}: {
  username: string;
  nickName: string;
}): IPostSignInSuccess => ({
  type: POST_SIGN_IN_SUCCESS,
  payload: { username, nickName },
});
export interface IPostSignInFailure extends Action {
  type: typeof POST_SIGN_IN_FAILURE;
}

const postSingInFailure = (): IPostSignInFailure => ({
  type: POST_SIGN_IN_FAILURE,
});

export const IPostSignInActionCreators: IAPIAction<
  IPostSignInReqeust,
  IPostSignInSuccess,
  IPostSignInFailure
> = {
  request: postSingInRequest,
  success: postSingInSuccess,
  failure: postSingInFailure,
};

export type AuthActions =
  | IPutSignUpRequest
  | IPutSignUpSuccess
  | IPutSignUpFailure
  | IPostSignInReqeust
  | IPostSignInSuccess
  | IPostSignInFailure;

/*
  =========================================
                ExposedActions
  =========================================
*/

const putSignUp = (username: string, password: string, nickName: string) => ({
  type: PUT_SIGN_UP,
});

const signOut = () => ({
  type: SIGN_OUT,
});

const actionCreatorsForComponent = {
  putSignUp,
  signOut,
};

export default actionCreatorsForComponent;
