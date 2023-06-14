import { Request, Response } from 'express';
import { query } from '../../db/index';
import { BadRequestError, UnAuthenticatedError } from '../../errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createCookie } from '../../utils/createCookie';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Missing email or password');
    }

    const user = await query('SELECT * FROM users WHERE email = $1', [email]);

    if (!user[0]) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }
    const hashedPassword = user[0].password;

    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }

    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_LIFETIME,
    });

    createCookie({ res, token });

    res.status(200).json({
        success: true,
        user: { username: user[0].username, email: user[0].email },
    });
};
