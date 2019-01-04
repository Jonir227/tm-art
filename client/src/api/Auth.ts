import axios from 'axios';

interface IGetCheckUserAPI {
  validName: boolean;
}

export const getCheckUser = async (
  username: string,
): Promise<IGetCheckUserAPI> => {
  try {
    const { data } = await axios.get(`/auth/new/${username}`);
    return data;
  } catch (err) {
    throw Error(err);
  }
};

interface IPutSignUpAPI {
  username: string;
  token: string;
  nickName: string;
}

export const putSingUp = async (payload: {
  username: string;
  password: string;
  nickName: string;
}): Promise<IPutSignUpAPI> => {
  try {
    const { data } = await axios.put('/auth/new', { ...payload });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

interface IPostSignInAPI {
  token: string;
  nickName: string;
}

export const postSignIn = async (
  username: string,
  password: string,
): Promise<IPostSignInAPI> => {
  try {
    const {
      data: { token, nickName },
    } = await axios.post('/auth/login', { username, password });
    return { token, nickName };
  } catch (err) {
    throw Error(err);
  }
};
