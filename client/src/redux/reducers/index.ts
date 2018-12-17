import { combineReducers } from 'redux';
import mandalList, { IMandalListState } from './mandalList';

const rootReducer = combineReducers({ mandalList });

export interface IRootState {
  mandalList: IMandalListState;
}

export default rootReducer;
