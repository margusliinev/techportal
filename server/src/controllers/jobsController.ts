import { Request, Response } from 'express';

const getAllJobs = (req: Request, res: Response) => {
    res.json({ job: 'Full Stack Developer' });
};

export { getAllJobs };
