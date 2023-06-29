import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
    };
}

const getSkills = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const result = await query('SELECT skills FROM users WHERE id = $1', [req.user.userId]).catch(() => {
        throw new BadRequestError('Failed to fetch user skills');
    });

    const skills = result[0].skills as string[];

    res.status(200).json({ success: true, skills: skills });
};

export { getSkills };
