import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

const deleteSkill = async (req: AuthenticatedRequest, res: Response) => {
    const { skill } = req.body as { skill: string };

    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    try {
        await query('UPDATE users SET skills = array_remove(skills, $1) WHERE id = $2', [skill, req.user.userId.toString()]);

        res.status(200).json({ success: true, message: 'Skill deleted successfully' });
    } catch (error) {
        throw new BadRequestError('Failed deleting user skill');
    }
};

export { deleteSkill };
