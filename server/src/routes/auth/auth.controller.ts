import crypto from 'crypto';
import { Request, Response } from 'express';
import { checkPassword } from '../../../../shared/util/auth';
import { User } from '../../entities';
import { encodeJWT } from '../../utils/jwtParser';

const key = Buffer.from('5ebe2294ecd0e0f08eab7690d2a6ee69', 'hex');
const iv = Buffer.from('26ae5cc854e36b6bdfca366848dea6bb', 'hex');

interface IGetCheckValidNameReq extends Request {
  params: {
    username: string;
  };
}

export const getCheckValidName = async (
  req: IGetCheckValidNameReq,
  res: Response,
) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.json({
        validName: true,
      });
      return;
    }
    res.json({
      validName: false,
    });
  } catch (err) {
    res.status(503).json({
      message: `Cannot Use Db: ${err}`,
    });
  }
};

interface IPutCreateUserReq extends Request {
  body: {
    nickName: string;
    username: string;
    password: string;
  };
}

export const putCreateUser = async (req: IPutCreateUserReq, res: Response) => {
  const { nickName, username, password } = req.body;

  if (checkPassword(password)) {
    res.status(403).json({
      message: 'Invalid Password',
    });
    return;
  }
  // 비밀번호 암호화
  const cipher = crypto.createCipheriv('aes-256-ccm', key, iv);
  let encryptedPassword = cipher.update(password, 'utf8', 'hex');
  encryptedPassword += cipher.final('hex');

  const newUser = new User();
  newUser.username = username;
  newUser.password = encryptedPassword;
  newUser.nickName = nickName;

  try {
    await newUser.save();
  } catch (err) {
    res.status(503).json({
      message: 'cannot create new User',
    });
  }

  const jwt = encodeJWT(username, nickName);

  res.json({
    token: jwt,
    username,
    nickName,
  });
};

interface IPostLoginUserReq extends Request {
  body: {
    username: string;
    password: string;
  };
}

export const postLoginUser = async (req: IPostLoginUserReq, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOneOrFail({ username });

    const deciper = crypto.createDecipheriv('aes-256-ccm', key, iv);
    let decipered = deciper.update(user.password, 'hex', 'utf8');
    decipered += deciper.final('utf-8');

    if (password !== decipered) {
      res.status(401).json({
        message: 'Invalid Password',
      });
      return;
    }

    const jwt = encodeJWT(user.username, user.nickName);

    res.json({
      token: jwt,
      username: user.username,
      nickName: user.nickName,
    });
  } catch (err) {
    res.status(404).json({
      message: 'cannot find user',
    });
  }
};
