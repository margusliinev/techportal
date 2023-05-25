import { Request, Response } from 'express';

const getAllJobs = (req: Request, res: Response) => {
    res.send('getAllJobs route');
};

export { getAllJobs };
