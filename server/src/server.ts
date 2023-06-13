import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandler';
import notFoundMiddleware from './middleware/notFound';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import jobsRouter from './routes/jobsRoutes';
import statsRouter from './routes/statsRoutes';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200, credentials: true }));
app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', jobsRouter);
app.use('/', statsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
