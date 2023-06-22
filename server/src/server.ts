import 'express-async-errors';

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

import errorHandlerMiddleware from './middleware/errorHandler';
import notFoundMiddleware from './middleware/notFound';
import authRouter from './routes/authRoutes';
import jobsRouter from './routes/jobsRoutes';
import statsRouter from './routes/statsRoutes';
import userRouter from './routes/userRoutes';

dotenv.config();
const app = express();
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
});

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', jobsRouter);
app.use('/', statsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
