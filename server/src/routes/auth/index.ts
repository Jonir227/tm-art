import express from 'express';
import {
  getCheckValidName,
  postLoginUser,
  putCreateUser,
} from './auth.controller';

const router = express.Router();

router.put('/signup', putCreateUser);
router.get('/singup/:username', getCheckValidName);
router.post('/signin', postLoginUser);

export default router;
