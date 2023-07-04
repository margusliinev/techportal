import crypto from 'crypto';
import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError } from '../../errors';
import { sendResetPasswordEmail } from '../../utils/sendResetPasswordEmail';

interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    skills: string[];
    verification_token: string;
    verified: boolean;
    verification_date: string;
    password_token: string;
    password_token_expiration_date: string;
}

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body as { email: string };

    if (!email) {
        throw new BadRequestError('Please enter your email address');
    }

    const result = await query('select * from users where email = $1', [email]);
    const user = result[0] as User;

    if (!user) {
        throw new BadRequestError('There is no account associated with this email address');
    }

    if (user) {
        const passwordToken = crypto.randomBytes(40).toString('hex');

        const tenMinutes = 1000 * 60 * 10;

        const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

        user.password_token = passwordToken;
        user.password_token_expiration_date = passwordTokenExpirationDate.toString();

        query('UPDATE users SET password_token = $1, password_token_expiration_date = $2', [user.password_token, user.password_token_expiration_date]).catch(() => {
            throw new BadRequestError('Failed to update password token');
        });

        if (process.env.NODE_ENV === 'production') {
            const origin = 'https://techportal.onrender.com';
            sendResetPasswordEmail({ username: user.username, email: email, password_token: passwordToken, origin: origin }).catch((error) => console.log(error));
        } else {
            const origin = 'http://localhost:5173';
            sendResetPasswordEmail({ username: user.username, email: email, password_token: passwordToken, origin: origin }).catch((error) => console.log(error));
        }
    }

    res.status(200).json({ success: true, msg: 'Please check your email to reset your password' });
};
