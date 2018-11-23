import { Router } from 'express';
import { getMandals, putMandal } from './mandal.controller';

const router = Router();

router.get('', getMandals);

router.put('', putMandal);

export default router;
