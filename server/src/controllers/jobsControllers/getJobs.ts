import { Request, Response } from 'express';

import { query } from '../../db';

interface QueryParams {
    search?: string;
    employment?: string;
    location?: string;
    salary?: number;
}

export const getJobs = async (req: Request, res: Response) => {
    const { search, employment, location, salary }: QueryParams = req.query;

    let sqlQuery = 'SELECT * FROM jobs';
    const params = [];

    if (search) {
        const searchParam = `%${search.toLowerCase()}%`;
        if (params.length > 0) {
            sqlQuery += ` AND LOWER(position) LIKE $${params.length + 1}`;
        } else {
            sqlQuery += `  WHERE LOWER(position) LIKE $${params.length + 1}`;
        }
        params.push(searchParam);
    }

    if (employment && employment !== 'all') {
        if (params.length > 0) {
            sqlQuery += ` AND employment = $${params.length + 1}`;
        } else {
            sqlQuery += ' WHERE employment = $1';
        }
        params.push(employment);
    }

    if (location && location !== 'all') {
        if (params.length > 0) {
            sqlQuery += ` AND location = $${params.length + 1}`;
        } else {
            sqlQuery += ' WHERE location = $1';
        }
        params.push(location);
    }

    if (salary) {
        if (params.length > 0) {
            sqlQuery += ` AND salary >= $${params.length + 1}`;
        } else {
            sqlQuery += ' WHERE salary >= $1';
        }
        params.push(salary.toString());
    }

    let jobs = await query(sqlQuery, params);

    if (jobs.length === 0) {
        jobs = await query('SELECT * FROM jobs');
    }

    res.status(200).json({ success: true, jobs, totalJobs: jobs.length, numOfPages: 1 });
};
