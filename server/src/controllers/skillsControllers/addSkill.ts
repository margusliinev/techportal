import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
    };
}

const addSkill = async (req: AuthenticatedRequest, res: Response) => {
    const { skill } = req.body as { skill: string };

    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const userSkills = await query('SELECT skills FROM users WHERE id = $1', [req.user.userId]);
    const skillsArray: string[] = (userSkills[0].skills as string[]) || [];

    if (skillsArray.includes(skill)) {
        res.status(200).json({ success: true, message: 'Skill already exists in the array' });
        return;
    }

    await query('UPDATE users set skills = array_append(skills, $1) WHERE id = $2', [skill, req.user.userId]).catch(() => {
        throw new BadRequestError('Failed updating user skills');
    });

    res.status(201).json({ success: true, skill: skill });
};

export { addSkill };
