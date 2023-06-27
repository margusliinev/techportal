import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

const addSkill = async (req: AuthenticatedRequest, res: Response) => {
    const { skill } = req.body as { skill: string };

    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    await query('UPDATE users set skills = array_append(skills, $1) WHERE id = $2', [skill, req.user.userId.toString()]).catch(() => {
        throw new BadRequestError('Failed updating user skills');
    });

    res.status(201).json({ success: true, skill: skill });
};

export { addSkill };
