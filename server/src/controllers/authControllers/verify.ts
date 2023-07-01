import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

export const verify = async (req: Request, res: Response) => {
    const { verificationToken, email } = req.body as { verificationToken: string; email: string };

    const result = await query('SELECT * FROM users WHERE email = $1', [email]).catch(() => {
        throw new BadRequestError('Invalid email');
    });
    const user = result[0];

    if (!user) {
        throw new UnAuthenticatedError('Verification failed');
    }

    if (user.verification_token !== verificationToken) {
        throw new UnAuthenticatedError('Verification failed');
    }

    user.verification_token = null;
    user.verified = true;
    user.verification_date = Date.now();

    await query('UPDATE users SET verification_token = $1, verified = $2, verification_date = $3', [user.verification_token, user.verified, user.verification_date]).catch(() => {
        throw new BadRequestError('Failed to update user');
    });

    res.status(200).json({ success: true, msg: 'Your account has been verified' });
};
