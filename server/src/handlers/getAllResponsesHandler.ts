import { Request, Response } from 'express';
import getAllResponsesController from '../controllers/getAllResponsesController';

export default async function getAllResponsesHandler(req: Request, res: Response) {
    try {
        const responses = await getAllResponsesController() || [];
        
        if (responses) {
            res.status(200).json(responses);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}


