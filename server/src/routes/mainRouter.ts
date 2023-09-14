import express from 'express';
import getAllResponsesHandler from '../handlers/getAllResponsesHandler';
import createResponseHandler from '../handlers/createResponseHandler';

const mainRouter = express();

mainRouter.get("/response", getAllResponsesHandler);
mainRouter.post("/response", createResponseHandler);

export default mainRouter;