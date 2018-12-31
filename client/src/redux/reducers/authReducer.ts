import { AsyncActionCondition } from '../../types/condition';

export interface IAuthState {
  isSignedIn: boolean;
  loginStatus: AsyncActionCondition;
  username?: string;
  nickName?: string;
}

const deafultState: IAuthState = {
  isSignedIn: false,
  loginStatus: 'INIT',
};

const authReducer = (state: IAuthState): IAuthState => {
  return state;
};
