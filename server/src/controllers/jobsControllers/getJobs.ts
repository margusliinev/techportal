import { Request, Response } from 'express';

import { query } from '../../db';

interface QueryParams {
    search?: string;
    employment?: string;
    location?: string;
    salary?: number;
    sort?: string;
}

export const getJobs = async (req: Request, res: Response) => {
    const { search, employment, location, sort }: QueryParams = req.query;

    let sqlQuery = 'SELECT * FROM jobs';
    const params = [];

    if (search) {
        const searchParam = `%${search.toLowerCase().replace(/[\s-]+/g, '')}%`;
        if (params.length > 0) {
            sqlQuery += ` AND REPLACE(REPLACE(LOWER(position), ' ', ''), '-', '') ILIKE $${params.length + 1}`;
        } else {
            sqlQuery += ` WHERE REPLACE(REPLACE(LOWER(position), ' ', ''), '-', '') ILIKE $${params.length + 1}`;
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

    if (sort === 'latest') {
        sqlQuery += ` ORDER BY id ASC`;
    }
    if (sort === 'oldest') {
        sqlQuery += ` ORDER BY id DESC`;
    }
    if (sort === 'salary(highest)') {
        sqlQuery += ` ORDER BY salary DESC`;
    }
    if (sort === 'salary(lowest)') {
        sqlQuery += ` ORDER BY salary ASC`;
    }

    const jobs = await query(sqlQuery, params);

    res.status(200).json({ success: true, jobs, totalJobs: jobs.length, numOfPages: 1 });
};
