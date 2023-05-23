import { Request, Response } from 'express';
import { query } from '../db/index';

const getAllJobs = (req: Request, res: Response) => {
    res.send('getAllJobs route');
};

export { getAllJobs };
