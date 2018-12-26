import { Action } from 'redux';
import { IDefaultAPIFailure } from '../api/Mandal';

export default interface IAPIAction {
  request: (request?: any) => Action;
  success: (response?: any) => Action;
  failure: (error: IDefaultAPIFailure) => Action;
}
