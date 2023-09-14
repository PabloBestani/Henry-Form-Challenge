import express from 'express';
import getAllResponsesHandler from '../handlers/getAllResponsesHandler';
import createResponseHandler from '../handlers/createResponseHandler';
import updateResponseHandler from '../handlers/updateResponseHandler';

const mainRouter = express();

mainRouter.get("/response", getAllResponsesHandler);
mainRouter.post("/response", createResponseHandler);
mainRouter.patch("/response", updateResponseHandler);

export default mainRouter;