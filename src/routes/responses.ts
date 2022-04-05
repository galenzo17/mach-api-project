import { Router } from 'express';
const router = Router();

import { responseAdd,responseList } from '../controllers/responses'

  
router.post('/addCommonResponse', responseAdd);

router.get('/responselist', responseList)

export default router;
