import { Request, Response } from 'express';

import { query } from '../../db';
import { NotFoundError } from '../../errors';

export const getJob = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await query(`SELECT * FROM jobs WHERE id = $1`, [id])
        .then((response) => response[0])
        .catch(() => {
            throw new NotFoundError('Job not found');
        });

    res.status(200).json({ success: true, job: result });
};
