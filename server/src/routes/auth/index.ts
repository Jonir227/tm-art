import express from 'express';
import {
  getCheckValidName,
  postLoginUser,
  putCreateUser,
} from './auth.controller';

const router = express.Router();

router.put('/new', putCreateUser);
router.get('/new/:username', getCheckValidName);
router.post('/login', postLoginUser);

export default router;
