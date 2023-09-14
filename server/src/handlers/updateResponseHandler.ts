import { Request, Response } from "express";
import updateResponseController from "../controllers/updateResponseController";

export default async function updateResponseHandler(req: Request, res: Response) {
    try {
        const data = req.body;
        const updatedResponse = await updateResponseController(data);
        if (updatedResponse) res.status(200).json(updatedResponse);

    } catch (error) {
        console.log("Error at updateResponseHandler: ", error);
        res.status(400).json(error);
    }
}