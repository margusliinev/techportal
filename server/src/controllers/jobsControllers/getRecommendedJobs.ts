import { Request, Response } from 'express';

import { query } from '../../db';

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
}

export const getRecommendedJobs = async (req: Request, res: Response) => {
    const { userId } = req.query as { userId: string };

    const allJobs: Job[] = await query('SELECT * FROM jobs');

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

        if (matchingSkills > 0) {
            jobRanks.push({ job: job, matchingSkills: matchingSkills });
        }
    }

    jobRanks.sort((a, b) => b.matchingSkills - a.matchingSkills);

    const recommendedJobs = jobRanks.slice(0, 5).map((job) => job.job);

    res.status(200).json({ success: true, recommendedJobs: recommendedJobs });
};
