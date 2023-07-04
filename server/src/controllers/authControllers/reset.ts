import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

import { query } from '../../db';
import { BadRequestError } from '../../errors';

interface ResetPassword {
    newPassword: string;
    confirmNewPassword: string;
    token: string;
    email: string;
}

export const resetPassword = async (req: Request, res: Response) => {
    const { newPassword, confirmNewPassword, token, email } = req.body as ResetPassword;

    if (!newPassword || !confirmNewPassword || !token || !email) {
        throw new BadRequestError('Please fill all the fields');
    }

    if (newPassword !== confirmNewPassword) {
        throw new BadRequestError('Passwords do not match');
    }

    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result[0];

    if (user) {
        const currentDate = new Date(Date.now());

        if (user.password_token === token && user.password_token_expiration_date < currentDate) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newPassword, salt);

            query('UPDATE users SET password = $1, password_token = $2, password_token_expiration_date = $3 WHERE id = $4', [hash, null, null, user.id]).catch(() => {
                throw new BadRequestError('Failed to reset password');
            });
        }
    }
    res.status(200).json({ success: true, msg: 'Your password has been reset' });
};
