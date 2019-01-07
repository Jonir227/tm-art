import { IRootState } from '../redux/reducers';

export const isFatalError = (state: IRootState) => {
  const authError: boolean = state.auth.SignInStatus === 'FAILURE';
  return authError;
};
