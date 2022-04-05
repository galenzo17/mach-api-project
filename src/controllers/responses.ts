import { Request, Response } from 'express'

import ResponsebyMe, { IResponse } from '../models/ResponseByAgustin'


export const responseList = async (req: Request, res: Response) => {
    const responses = await ResponsebyMe.find()
    res.json({"responses": responses})
};

export const responseAdd = async (req: Request, res: Response) => {
    const response = new ResponsebyMe({commonR:req.body.commonR,});
    await response.save();
    res.json(response);
};