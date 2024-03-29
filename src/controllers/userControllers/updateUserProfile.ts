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
    email: string;
}

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const updateUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const { username, email }: UserProfile = req.body as UserProfile;

    if (!username || !email) {
        throw new BadRequestError('Missing username or email');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Username must be between 3-16 characters');
        } else {
            throw new BadRequestError('Username can only contain letters (A-Z) and numbers (0-9)');
        }
    }

    if (!emailRegex.test(email)) {
        throw new BadRequestError('Email is invalid');
    }

    const normalizedEmail = email.toLowerCase().trim();

    const uniqueEmail = await query('select * from users where email = $1 AND id != $2', [normalizedEmail, req.user.userId]);
    if (uniqueEmail.length >= 1) {
        throw new BadRequestError('Email address is already registered');
    }

    const result = await query('UPDATE users SET username = $1, email = $2 WHERE id = $3 returning *', [username, normalizedEmail, req.user.userId]);
    const user = {
        id: result[0].id as string,
        username: result[0].username as string,
        email: result[0].email as string,
    };

    res.status(200).json({ success: true, user });
};
