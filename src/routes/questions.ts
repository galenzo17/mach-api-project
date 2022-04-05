import { Router } from 'express';
const router = Router();

import { questionList,questionAdd } from '../controllers/questions'

router.post('/addCommonQuestion', questionAdd);
router.get('/', questionList)

export default router;
