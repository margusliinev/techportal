import { Request, Response } from 'express';
import moment from 'moment';

import { query } from '../../db';
import { BadRequestError, UnAuthenticatedError } from '../../errors';

export const verify = async (req: Request, res: Response) => {
    const { verificationToken, email } = req.body as { verificationToken: string; email: string };

    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result[0];

    if (!user) {
        throw new UnAuthenticatedError('Verification failed');
    }

    if (user.verification_token !== verificationToken) {
        throw new UnAuthenticatedError('Verification failed');
    }

    const utcDate = moment().utc().format('YYYY-MM-DD HH:mm:ss');

    query('UPDATE users SET verification_token = $1, verified = $2, verification_date = $3 WHERE id = $4', [null, true, utcDate, user.id]).catch(() => {
        throw new BadRequestError('Failed to verify user');
    });

    res.status(200).json({ success: true, msg: 'Your account has been verified' });
};
