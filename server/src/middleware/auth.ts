import jwt, { JwtPayload } from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors';
import { Request, Response, NextFunction } from 'express';
import { query } from '../db';

interface CustomRequest extends Request {
    user?: any;
}

const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        const result = await query('SELECT * FROM users WHERE id = $1', [decoded.userId]);
        req.user = { userId: result.rows[0].id };
        next();
    } catch (error) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }
};

export default auth;
