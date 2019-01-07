import { combineReducers } from 'redux';
import auth, { IAuthState } from './authReducer';
import mandalList, { IMandalListState } from './mandalListReducer';

export interface IRootState {
  mandalList: IMandalListState;
  auth: IAuthState;
}

const rootReducer = combineReducers<IRootState>({ mandalList, auth });

export default rootReducer;
