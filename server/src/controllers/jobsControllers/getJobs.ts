import { Request, Response } from 'express';

import { query } from '../../db';

interface QueryParams {
    search?: string;
    employment?: string;
    location?: string;
    sort?: string;
    page?: number;
    limit?: number;
    userId?: string;
}

enum Employment {
    full_time = 'full-time',
    part_time = 'part-time',
    internship = 'internship',
    contractor = 'contract',
}

enum Location {
    remote = 'remote',
    part_remote = 'part-remote',
    tallinn = 'tallinn',
    tartu = 'tartu',
    parnu = 'parnu',
    narva = 'narva',
}

interface Job {
    id: number;
    company: string;
    position: string;
    employment: Employment;
    location: Location;
    salary: number;
    expire_date: Date;
    technologies: string[];
    company_logo: string;
    company_post: string;
    recommended: boolean;
}

export const getJobs = async (req: Request, res: Response) => {
    const { search, employment, location, sort, page, limit, userId }: QueryParams = req.query;

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
        sqlQuery += ` ORDER BY CASE WHEN recommended = true THEN 0 ELSE 1 END, id ASC`;
    }
    if (sort === 'oldest') {
        sqlQuery += ` ORDER BY CASE WHEN recommended = true THEN 0 ELSE 1 END, id DESC`;
    }
    if (sort === 'salary(highest)') {
        sqlQuery += ` ORDER BY CASE WHEN recommended = true THEN 0 ELSE 1 END, salary DESC`;
    }
    if (sort === 'salary(lowest)') {
        sqlQuery += ` ORDER BY CASE WHEN recommended = true THEN 0 ELSE 1 END, salary ASC`;
    }

    const pageNumber = page || 1;
    const limitNumber = limit || 10;

    const skip = (pageNumber - 1) * limitNumber;

    const allJobs: Job[] = await query(sqlQuery, params);

    const numOfPages = Math.ceil(allJobs.length / limitNumber);

    if (userId && allJobs.length > 0) {
        const result = await query('SELECT skills FROM users WHERE id = $1', [userId]);
        const skills = result[0].skills as string[];

        const jobRanks: { job: Job; matchingSkills: number }[] = [];

        for (const job of allJobs) {
            let matchingSkills = 0;

            for (const skill of skills) {
                if (job.technologies.includes(skill.toLowerCase().replace('.', ''))) {
                    matchingSkills++;
                }
            }

            jobRanks.push({ job: job, matchingSkills: matchingSkills });
        }

        jobRanks.sort((a, b) => b.matchingSkills - a.matchingSkills);

        const recommendedJobs = jobRanks.slice(0, 5).map((job) => job.job);

        if (allJobs.length === 140) {
            const updateQuery = `
            UPDATE jobs
            SET recommended = CASE
            WHEN id IN (${recommendedJobs.map((job) => job.id).join(',')}) THEN true
            ELSE false
            END;
        `;
            await query(updateQuery).catch((err) => console.log(err));
        }
    } else {
        const updateQuery = `
            UPDATE jobs
            SET recommended = false
        `;

        await query(updateQuery).catch((err) => console.log(err));
    }

    sqlQuery += ` LIMIT ${limitNumber} OFFSET ${skip}`;
    const displayedJobs = await query(sqlQuery, params);

    res.status(200).json({ success: true, jobs: displayedJobs, totalJobs: allJobs.length, numOfPages: numOfPages });
};
