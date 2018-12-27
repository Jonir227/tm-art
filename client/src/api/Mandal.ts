import axios from 'axios';
import { IMandalArt, IMandalArtFront } from '../types/MandalArt';

export interface IDefaultAPIFailure {
  message: string;
}

export interface IGetMandalListSuccessAPI {
  count: number;
  mandalArts: IMandalArtFront[];
}

export const getMandalList = async (): Promise<
  IGetMandalListSuccessAPI | IDefaultAPIFailure
> => {
  // 데이터 변경되면 데이터 처리
  try {
    const { data: mandalList } = await axios.get('/mandal');
    return mandalList;
  } catch (err) {
    return { message: err };
  }
};

export interface IGetMandalArtSuccessAPI {
  mandalArt: IMandalArt;
}

export const getMandalArt = async (
  id: number,
): Promise<IGetMandalArtSuccessAPI | IDefaultAPIFailure> => {
  try {
    const { data: response } = await axios.get(`/mandal/${id}`);
    return response;
  } catch (err) {
    return { message: err };
  }
};
