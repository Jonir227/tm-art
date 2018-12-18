import axios, { AxiosPromise } from 'axios';
import { IMandalArtFront } from '../types/MandalArt';

export interface IDefaultAPIFailure {
  message: string;
}

export interface IGetMandalListSuccessAPI {
  count: number;
  mandalArts: IMandalArtFront[];
}

export const getMandalList = (): AxiosPromise<IGetMandalListSuccessAPI> => {
  return axios.get('/mandal');
};
