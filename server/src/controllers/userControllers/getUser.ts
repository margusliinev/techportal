import { Request, Response } from 'express';

import { query } from '../../db';
import { UnAuthenticatedError } from '../../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
}

const getUser = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }

    const result = await query('SELECT * FROM users WHERE id = $1', [req.user.userId.toString()]);
    const user = {
        username: result[0].username as string,
        email: result[0].email as string,
    };

    res.status(200).json({ success: true, user });
};

export { getUser };
