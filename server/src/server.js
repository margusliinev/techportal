import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import 'express-async-errors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import router from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.use(express.json());
app.use(cors());
app.use('/', router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening on port ${port}`));
