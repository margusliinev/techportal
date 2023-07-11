import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { query } from '../../db/index';
import { BadRequestError, UnAuthenticatedError } from '../../errors';
import { createCookie } from '../../utils/createCookie';

interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

interface UserLogin {
    email: string;
    password: string;
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: UserLogin = req.body as UserLogin;

    if (!email || !password) {
        throw new BadRequestError('Missing email or password');
    }

    const normalizedEmail = email.toLowerCase().trim();

    const result = await query('SELECT * FROM users WHERE email = $1', [normalizedEmail]);
    const user = result[0] as User;

    if (!user) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }

    const hashedPassword = user.password;

    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_LIFETIME,
    });

    createCookie({ res, token });

    res.status(200).json({
        success: true,
        msg: 'Login successful',
    });
};
