import { Request, Response } from 'express'

import Question, { IQuestion } from '../models/Question'
import { signupValidation, signinValidation } from '../libs/joi'
import jwt from 'jsonwebtoken';

export const questionList = async (req: Request, res: Response) => {
    console.log('questionList',process.env.MONGODB_URI )
    const questions = await Question.find()
    res.status(200).json({"questions": questions})
};

export const questionAdd = async (req: Request, res: Response) => {
   // const { error } = signupValidation(req.body);
    //if (error) return res.status(400).send(error.details[0].message);

    const question = new Question({
        commonQ: req.body.commonQ
    });
    await question.save();
    res.status(201).json(question);
};