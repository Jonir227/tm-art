import jwt from 'jsonwebtoken';

const key = 'YouCannotFindTheSecret';

export const encodeJWT = (username: string, nickname: string) => {
  return jwt.sign({ username, nickname}, key, { expiresIn: '1week' });
};

export const decodeJWT = (token: string) => {
  try {
    const decode = jwt.verify(token, key);
    return decode;
  } catch(err) {
    throw Error("Invalid Password");
  }
};
