import { Action } from 'redux';

export default interface IAPIAction<R = Action, S = Action, F = Action> {
  request: (request?: any) => R;
  success: (...response: any) => S;
  failure: (error: Error) => F;
}
