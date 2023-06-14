import { Request, Response } from 'express';
import { query } from '../../db';

export const getJobs = async (req: Request, res: Response) => {
    const jobs = await query('select * from jobs');
    res.status(200).json({ success: true, jobs: jobs, totalJobs: jobs.length, numOfPages: 1 });
};
