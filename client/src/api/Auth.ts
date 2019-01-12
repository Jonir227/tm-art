import axios from 'axios';

interface IGetCheckUserAPI {
  validName: boolean;
}

export const getCheckUser = async (
  username: string,
): Promise<IGetCheckUserAPI> => {
  const { data } = await axios.get(`/auth/signup/${username}`);
  return data;
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
  const { data } = await axios.put('/auth/signup', { ...payload });
  return data;
};

interface IPostSignInAPI {
  token: string;
  nickName: string;
}

export const postSignIn = async (
  username: string,
  password: string,
): Promise<IPostSignInAPI> => {
  const {
    data: { token, nickName },
  } = await axios.post('/auth/signin', { username, password });
  return { token, nickName };
};
