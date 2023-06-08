import { Request, Response } from 'express';
import { query } from '../../db';

interface CustomRequest extends Request {
    user?: any;
}

export const deleteUser = async (req: CustomRequest, res: Response) => {
    await query('DELETE FROM users WHERE id = $1', [req.user.userId]);
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(204).json({ success: false, msg: 'Your account has been deleted' });
};
