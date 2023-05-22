import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandler.js';
import notFoundMiddleware from './middleware/notFound.js';
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', authRouter);
app.use('/', jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening on port ${port}`));
