import express from 'express';
import mandalRoute from './mandal';

const router = express.Router();

router.use('/mandal', mandalRoute);

export default router;
