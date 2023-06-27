import { Request, Response } from 'express';

import { query } from '../../db';
import { UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

const addSkills = async (req: AuthenticatedRequest, res: Response) => {
    const { skill } = req.body as { skill: string };
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const result = await query('UPDATE users set skills = array_append(skills, $1) WHERE id = $2', [skill, req.user.userId.toString()]);

    res.status(201).json({ success: true, skill: skill });
};

export { addSkills };
