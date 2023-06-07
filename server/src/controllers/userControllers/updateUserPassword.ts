import { Request, Response } from 'express';
import { query } from '../../db';
import { BadRequestError } from '../../errors';
import bcrypt from 'bcryptjs';

interface CustomRequest extends Request {
    user?: any;
}

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%&*,.?]{8,}$/;

export const updateUserPassword = async (req: CustomRequest, res: Response) => {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
        throw new BadRequestError('Missing current password, new password, or confirm password');
    }

    const userPassword = await query('SELECT password FROM users WHERE id = $1', [req.user.userId]);

    const passwordMatch = await bcrypt.compare(currentPassword, userPassword.rows[0].password);

    if (!passwordMatch) {
        throw new BadRequestError('Current password is incorrect');
    }

    if (!passwordRegex.test(newPassword)) {
        if (newPassword.length < 8) {
            throw new BadRequestError('Password must be at least 8 characters long');
        } else if (!/(?=.*[a-z])/.test(newPassword)) {
            throw new BadRequestError('Password must contain at least one letter');
        } else if (!/(?=.*\d)/.test(newPassword)) {
            throw new BadRequestError('Password must contain at least one number');
        } else {
            throw new BadRequestError('Allowed special characters in password: !@#$%&*,.?');
        }
    }

    if (newPassword !== confirmNewPassword) {
        throw new BadRequestError('Passwords do not match');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    await query('UPDATE users SET password = $1 WHERE id = $2', [hash, req.user.userId]);

    res.status(200).json({ success: true, msg: 'User password has been updated' });
};
