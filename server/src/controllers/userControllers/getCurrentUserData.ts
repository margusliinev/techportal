import { Request, Response } from 'express';
import { query } from '../../db';

interface CustomRequest extends Request {
    user?: any;
}

const getCurrentUserData = async (req: CustomRequest, res: Response) => {
    const result = await query('SELECT * FROM users WHERE id = $1', [req.user.userId]);
    const user = {
        username: result.rows[0].username,
        email: result.rows[0].email,
    };
    res.status(200).json({ user });
};

export { getCurrentUserData };
