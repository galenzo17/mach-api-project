"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const questions_1 = require("../controllers/questions");
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
router.get('/questions', questions_1.questionList);
router.post('/addCommonQuestion', questions_1.questionAdd);
//router.get('/', questionList)
router.put('/question/:id', questions_1.questionList);
router.delete('/question/:id', questions_1.questionList);
exports.default = router;
//# sourceMappingURL=questions.js.map