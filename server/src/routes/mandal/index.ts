import { Router } from 'express';
import { getMandal, getMandals, putMandal } from './mandal.controller';

const router = Router();

router.get('', getMandals);
router.get('/:id', getMandal);

router.put('', putMandal);

export default router;
