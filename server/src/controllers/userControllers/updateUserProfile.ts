import { Request, Response } from 'express';
import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const updateUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const { username, email } = req.body;

    if (!username || !email) {
        throw new BadRequestError('Missing email or password');
    }

    const uniqueEmail = await query('select email from users where email = $1 AND id != $2', [
        email,
        req.user.userId,
    ]);
    if (uniqueEmail.length >= 1) {
        throw new BadRequestError('Email address is already in use');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Username must be between 3-16 characters');
        } else {
            throw new BadRequestError('Username can only contain letters (A-Z) and numbers (0-9)');
        }
    }

    if (!emailRegex.test(email)) {
        throw new BadRequestError('Please enter a valid email');
    }

    const result = await query(
        'UPDATE users SET username = $1, email = $2 WHERE id = $3 returning *',
        [username, email, req.user.userId]
    );
    const user = {
        username: result[0].username,
        email: result[0].email,
    };

    res.status(200).json({ success: true, user });
};
