import { Router } from 'express';
const router = Router();

import { questionList,questionAdd } from '../controllers/questions'
/**
 * @swagger
 * components:
 *  schemas:
 *    question:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        commonQ:
 *          type: string
 *          description: the question
 *      required:
 *        - commonQ
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        commonQ: A question?
 */

/**
 * @swagger
 * /Questions:
 *  get:
 *    summary: Returns a list of questions
 *    tags: [questions]
 *    responses:
 *      200:
 *        description: the list of questions
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/question'
 */
router.get('/questions', questionList)
  
router.post('/addCommonQuestion', questionAdd);

//router.get('/', questionList)
router.put('/question/:id', questionList)
router.delete('/question/:id', questionList)
export default router;
