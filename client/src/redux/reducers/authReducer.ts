import { AsyncActionCondition } from '../../types/condition';
import { AuthActions } from '../actions/AuthActions';
import {
  PUT_SIGN_UP_FAILURE,
  PUT_SIGN_UP_REQUEST,
  PUT_SIGN_UP_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actionTypes/AuthActionTypes';

export interface IAuthState {
  readonly isSignedIn: boolean;
  readonly SignInStatus: AsyncActionCondition;
  readonly username: string | undefined;
  readonly nickName: string | undefined;
  readonly SignUpStatus: AsyncActionCondition;
  readonly SignUpRejectReason: 'NONE' | 'PASSWORD' | 'EMAIL' | 'NICKNAME';
}

const deafultState: IAuthState = {
  isSignedIn: false,
  SignInStatus: 'INIT',
  username: undefined,
  nickName: undefined,
  SignUpStatus: 'INIT',
  SignUpRejectReason: 'NONE',
};

const authReducer = (
  state: IAuthState = deafultState,
  action: AuthActions,
): IAuthState => {
  switch (action.type) {
    case PUT_SIGN_UP_REQUEST: {
      return {
        ...state,
        SignUpStatus: 'LOADING',
      };
    }
    case PUT_SIGN_UP_SUCCESS: {
      return {
        ...state,
        SignUpStatus: 'SUCCESS',
      };
    }
    case PUT_SIGN_UP_FAILURE: {
      return {
        ...state,
        SignUpStatus: 'FAILURE',
      };
    }
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        SignInStatus: 'LOADING',
      };
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        SignInStatus: 'SUCCESS',
        nickName: action.payload.nickName,
        username: action.payload.username,
      };
    }
    case SIGN_IN_FAILURE: {
      return {
        ...state,
        SignInStatus: 'FAILURE',
      };
    }
    default:
      return state;
  }
};

export default authReducer;
