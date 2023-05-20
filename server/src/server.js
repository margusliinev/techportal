import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import 'express-async-errors';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import router from './routes/index.js';

app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening on port ${port}`));
