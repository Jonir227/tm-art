import { combineReducers } from 'redux';
import mandalList, { IMandalListState } from './mandalListReducer';

const rootReducer = combineReducers({ mandalList });

export interface IRootState {
  mandalList: IMandalListState;
}

export default rootReducer;
