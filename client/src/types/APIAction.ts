import { Action } from 'redux';

export default interface IAPIAction {
  request: (request?: any) => Action;
  success: (response?: any) => Action;
  failure: (error: Error) => Action;
}
