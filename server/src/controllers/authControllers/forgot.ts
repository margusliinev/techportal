import crypto from 'crypto';
import { Request, Response } from 'express';
import moment from 'moment';

import { query } from '../../db';
import { BadRequestError } from '../../errors';
import { sendResetPasswordEmail } from '../../utils/sendResetPasswordEmail';

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body as { email: string };

    if (!email) {
        throw new BadRequestError('Please enter your email address');
    }

    const result = await query('select * from users where email = $1', [email]);
    const user = result[0];

    if (!user) {
        throw new BadRequestError('There is no account associated with this email address');
    }

    if (user) {
        const passwordToken = crypto.randomBytes(40).toString('hex');

        const utcDate = moment().utc().clone().add(10, 'minutes').format('YYYY-MM-DD HH:mm:ss');

        query('UPDATE users SET password_token = $1, password_token_expiration_date = $2 WHERE id = $3', [passwordToken, utcDate, user.id]).catch(() => {
            throw new BadRequestError('Failed to update password token');
        });

        if (process.env.NODE_ENV === 'production') {
            const origin = 'https://techportal.onrender.com';
            sendResetPasswordEmail({ username: user.username as string, email: email, password_token: passwordToken, origin: origin }).catch((error) => console.log(error));
        } else {
            const origin = 'http://localhost:5173';
            sendResetPasswordEmail({ username: user.username as string, email: email, password_token: passwordToken, origin: origin }).catch((error) => console.log(error));
        }
    }

    res.status(200).json({ success: true, msg: 'Please check your email to reset your password' });
};
