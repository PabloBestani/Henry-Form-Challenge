import { Request, Response } from "express";
import createResponseController from "../controllers/createResponseController";

export default async function createResponseHandler(req: Request, res: Response) {
    try {
        // Extraer el input del usuario
        const responseInput = req.body;
        console.log(responseInput);
        if (!responseInput) throw new Error(`Response value recieved is ${responseInput} (at handler)`);
        
        const response = await createResponseController(responseInput);
        console.log("ESTO VOLVIO AL HANDLERR:: ", response);
        if (response) res.status(200).json(response);



    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}