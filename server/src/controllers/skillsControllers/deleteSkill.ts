import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
    };
}

const deleteSkill = async (req: AuthenticatedRequest, res: Response) => {
    const { skill } = req.body as { skill: string };

    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    await query('UPDATE users SET skills = array_remove(skills, $1) WHERE id = $2', [skill, req.user.userId]).catch(() => {
        throw new BadRequestError('Failed deleting user skill');
    });

    res.status(204).json({ success: true, message: 'Skill deleted successfully' });
};

export { deleteSkill };
