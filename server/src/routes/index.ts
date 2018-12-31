import express from 'express';
import authRoute from './auth';
import mandalRoute from './mandal';

const router = express.Router();

router.use('/mandal', mandalRoute);
router.use('/auth', authRoute);

export default router;
