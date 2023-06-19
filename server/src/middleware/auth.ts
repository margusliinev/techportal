import { NextFunction,Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { query } from '../db';
import { UnAuthenticatedError } from '../errors';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: number;
    };
    cookies: {
        token: string;
    };
}

const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        const result = await query('SELECT * FROM users WHERE id = $1', [decoded.userId]);
        req.user = { userId: result[0].id as number };
        next();
    } catch (error) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }
};

export default auth;
