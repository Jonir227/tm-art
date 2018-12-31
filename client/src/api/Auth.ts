import axios from 'axios';

interface IGetCheckUserAPIRes {
  validName: boolean;
}

export const getCheckUser = async (
  username: string,
): Promise<IGetCheckUserAPIRes> => {
  try {
    const { data } = await axios.get('/auth/new', { params: { username } });
    return data;
  } catch (err) {
    throw Error(err);
  }
};
