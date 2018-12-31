import express from 'express';
import { putCreateUser } from './auth.controller';

const router = express.Router();

router.put('/new', putCreateUser);

export default router;
