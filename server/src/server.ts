import 'express-async-errors';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import errorHandlerMiddleware from './middleware/errorHandler';
import notFoundMiddleware from './middleware/notFound';
import authRouter from './routes/authRoutes';
import jobsRouter from './routes/jobsRoutes';
import statsRouter from './routes/statsRoutes';
import userRouter from './routes/userRoutes';

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
});

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200, credentials: true }));
app.use(limiter);
app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', jobsRouter);
app.use('/', statsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
