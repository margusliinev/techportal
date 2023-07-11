import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { query } from '../../db';
import { BadRequestError } from '../../errors';
import { createCookie } from '../../utils/createCookie';

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%&*,.?]{8,}$/;

interface UserRegister {
    username: string;
    email: string;
    password: string;
}

export const register = async (req: Request, res: Response) => {
    const { username, email, password }: UserRegister = req.body as UserRegister;

    if (!username || !email || !password) {
        throw new BadRequestError('Missing username, email or password');
    }

    const uniqueEmail = await query('select * from users where email = $1', [email]);
    if (uniqueEmail.length >= 1) {
        throw new BadRequestError('Email address is already registered');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Invalid username, username must be between 3-16 characters');
        } else {
            throw new BadRequestError('Invalid username, username can only contain letters (A-Z) and numbers (0-9)');
        }
    }

    if (!emailRegex.test(email)) {
        throw new BadRequestError('Email is invalid');
    }

    if (!passwordRegex.test(password)) {
        if (password.length < 8) {
            throw new BadRequestError('Password must be at least 8 characters long');
        } else if (!/(?=.*[a-z])/.test(password)) {
            throw new BadRequestError('Password must contain at least one letter');
        } else if (!/(?=.*\d)/.test(password)) {
            throw new BadRequestError('Password must contain at least one number');
        } else {
            throw new BadRequestError('Allowed special characters in password: !@#$%&*,.?');
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const normalizedEmail = email.toLowerCase().trim();

    const result = await query('insert into users (username, email, password) values ($1, $2, $3) returning *', [username, normalizedEmail, hash]);

    const user = result[0];

    const token = jwt.sign({ userId: user.id as string }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_LIFETIME,
    });

    createCookie({ res, token });

    res.status(201).json({
        success: true,
        msg: 'Your account has been created',
    });
};
