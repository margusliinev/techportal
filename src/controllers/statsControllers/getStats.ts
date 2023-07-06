import { Request, Response } from 'express';

import { query } from '../../db';

export const getStats = async (req: Request, res: Response) => {
    const jobs = await query('select * from jobs');

    // Extract all technologies from the jobs and flatten the array
    const allTechnologies = jobs.map((job) => job.technologies as string[]).flat();

    // Count the occurrences of each technology using reduce
    const technologyCount: Record<string, number> = allTechnologies.reduce((total, technology) => {
        total[technology] = (total[technology] || 0) + 1;
        return total;
    }, {} as Record<string, number>);

    // Sort the technologies based on the count in descending order
    const sortedTechnologies = Object.entries(technologyCount).sort((a, b) => b[1] - a[1]);

    // Extract the top 7 technologies with the highest count
    const topTechnologies = sortedTechnologies.slice(0, 7).map(([technology, count]) => ({
        technology,
        count,
    }));

    res.status(200).json({ success: true, topTechnologies: topTechnologies });
};
