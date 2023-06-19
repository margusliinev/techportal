import { Request, Response } from 'express';

import { query } from '../../db';
import { UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    await query('DELETE FROM users WHERE id = $1', [req.user.userId.toString()]);
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });

    res.status(204).json({ success: false, msg: 'Your account has been deleted' });
};
