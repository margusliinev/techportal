import { Request, Response } from 'express';

import { query } from '../../db';
import { Job } from '../../types';

interface QueryParams {
    search?: string;
    employment?: string;
    location?: string;
    sort?: string;
    page?: number;
    limit?: number;
}

export const getJobs = async (req: Request, res: Response) => {
    const { search, employment, location, sort, page, limit }: QueryParams = req.query;

    let sqlQuery = 'SELECT * FROM jobs';
    const params = [];

    if (search) {
        const searchParam = `%${search.toLowerCase().replace(/[\s-]+/g, '')}%`;
        if (params.length > 0) {
            sqlQuery += ` AND (REPLACE(REPLACE(LOWER(position), ' ', ''), '-', '') ILIKE $${params.length + 1} OR EXISTS (SELECT 1 FROM unnest(technologies) AS tech WHERE tech ILIKE $${
                params.length + 1
            }))`;
        } else {
            sqlQuery += ` WHERE (REPLACE(REPLACE(LOWER(position), ' ', ''), '-', '') ILIKE $${params.length + 1} OR EXISTS (SELECT 1 FROM unnest(technologies) AS tech WHERE tech ILIKE $${
                params.length + 1
            }))`;
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

    const pageNumber = page || 1;
    const limitNumber = limit || 10;

    const skip = (pageNumber - 1) * limitNumber;

    const allJobs: Job[] = await query(sqlQuery, params);

    const numOfPages = Math.ceil(allJobs.length / limitNumber);

    sqlQuery += ` LIMIT ${limitNumber} OFFSET ${skip}`;

    const displayedJobs = await query(sqlQuery, params);

    res.status(200).json({ success: true, jobs: displayedJobs, totalJobs: allJobs.length, numOfPages: numOfPages });
};
