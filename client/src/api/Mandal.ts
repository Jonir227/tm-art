import axios, { AxiosPromise } from 'axios';
import { IMandalArt } from '../types/MandalArt';

export interface IDefaultAPIFailure {
  message: string;
}

export interface IGetMandalListSuccessAPI {
  count: number;
  mandalArts: IMandalArt[];
}

export const getMandalList = (): AxiosPromise<IGetMandalListSuccessAPI> => {
  return axios.get('/mandal');
};
