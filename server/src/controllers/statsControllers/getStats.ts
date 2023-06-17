import { Request, Response } from 'express';
import { query } from '../../db';

export const getStats = async (req: Request, res: Response) => {
    const jobs = await query('select * from jobs');

    const allTechnologies = jobs.map((job) => job.technologies as string[]).flat();

    const technologyCount: Record<string, number> = allTechnologies.reduce((total, technology) => {
        total[technology] = (total[technology] || 0) + 1;
        return total;
    }, {} as Record<string, number>);

    const sortedTechnologies = Object.entries(technologyCount).sort((a, b) => b[1] - a[1]);

    const topTechnologies = sortedTechnologies.slice(0, 7).map(([technology, count]) => ({
        technology,
        count,
    }));

    res.status(200).json({ success: true, topTechnologies: topTechnologies });
};
