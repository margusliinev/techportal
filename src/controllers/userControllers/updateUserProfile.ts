import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
    };
}

interface UserProfile {
    username: string;
}

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;

export const updateUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const { username }: UserProfile = req.body as UserProfile;

    if (!username) {
        throw new BadRequestError('Please provide a username');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Username must be between 3-16 characters');
        } else {
            throw new BadRequestError('Username can only contain letters (A-Z) and numbers (0-9)');
        }
    }

    const result = await query('UPDATE users SET username = $1 WHERE id = $2 returning *', [username, req.user.userId]);
    const user = {
        id: result[0].id as string,
        username: result[0].username as string,
        email: result[0].email as string,
    };

    res.status(200).json({ success: true, user });
};
