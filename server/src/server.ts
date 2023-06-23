import 'express-async-errors';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'path';

import errorHandlerMiddleware from './middleware/errorHandler';
import notFoundMiddleware from './middleware/notFound';
import authRouter from './routes/authRoutes';
import jobsRouter from './routes/jobsRoutes';
import statsRouter from './routes/statsRoutes';
import userRouter from './routes/userRoutes';

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP address, please try again later',
});

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200, credentials: true }));
app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.use(express.json());
app.use(cookieParser());
app.use(limiter);
app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', jobsRouter);
app.use('/', statsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
