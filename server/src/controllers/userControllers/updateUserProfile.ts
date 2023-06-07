import { Request, Response } from 'express';
import { query } from '../../db';
import { BadRequestError } from '../../errors';

interface CustomRequest extends Request {
    user?: any;
}

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const updateUserProfile = async (req: CustomRequest, res: Response) => {
    const { username, email } = req.body;

    if (!username || !email) {
        throw new BadRequestError('Missing email or password');
    }

    const uniqueEmail = await query('select email from users where email = $1 AND id != $2', [email, req.user.userId]);
    if (uniqueEmail.rows.length >= 1) {
        throw new BadRequestError('Email address is already in use');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Invalid username, username must be between 3-16 characters');
        } else {
            throw new BadRequestError('Invalid username, username can only contain letters (A-Z) and numbers (0-9)');
        }
    }

    if (!emailRegex.test(email)) {
        throw new BadRequestError('New Email is invalid, please enter a valid email');
    }

    const result = await query('UPDATE users SET username = $1, email = $2 WHERE id = $3 returning *', [username, email, req.user.userId]);
    const user = {
        username: result.rows[0].username,
        email: result.rows[0].email,
    };

    res.status(200).json({ success: true, user });
};
