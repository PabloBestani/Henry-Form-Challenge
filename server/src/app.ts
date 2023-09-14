import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mainRouter from './routes/mainRouter';

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use((req: Request, res: Response, next: NextFunction) => {
    const frontEndUrl = process.env.FRONTEND_URL || '';
    res.setHeader("Access-Control-Allow-Origin", frontEndUrl);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
})

app.use("/", mainRouter);

export default app;