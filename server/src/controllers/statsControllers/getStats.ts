import { Request, Response } from 'express';
import { query } from '../../db';

export const getStats = async (req: Request, res: Response) => {
    const jobs = await query('select * from jobs');

    const allTechnologies = jobs.rows.map((job) => job.technologies).flat();

    const technologyCount: Record<string, number> = allTechnologies.reduce((total, technology) => {
        total[technology] = (total[technology] || 0) + 1;
        return total;
    }, {});

    const sortedTechnologies = Object.entries(technologyCount).sort((a, b) => b[1] - a[1]);

    const topTechnologies = sortedTechnologies.slice(0, 10).map(([technology, count]) => ({
        technology,
        count,
    }));

    res.status(200).json({ success: true, topTechnologies: topTechnologies });
};
