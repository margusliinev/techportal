import { Request, Response } from 'express';
import { query } from '../db/index';
import { BadRequestError } from '../errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%&*,.?]{8,}$/;

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new BadRequestError('Missing username, email or password');
    }
    const uniqueEmail = await query('select email from users where email = $1', [email]);
    if (uniqueEmail.rows.length >= 1) {
        throw new BadRequestError('Email address is already registered.');
    }

    if (!usernameRegex.test(username)) {
        if (username.length < 3 || username.length > 16) {
            throw new BadRequestError('Invalid username, username must be between 3-16 characters.');
        } else {
            throw new BadRequestError('Invalid username, username can only contain letters (A-Z) and numbers (0-9).');
        }
    }

    if (!emailRegex.test(email)) {
        throw new BadRequestError('Email is invalid');
    }

    if (!passwordRegex.test(password)) {
        if (password.length < 8) {
            throw new BadRequestError('Password must be at least 8 characters long.');
        } else if (!/(?=.*[a-z])/.test(password)) {
            throw new BadRequestError('Password must contain at least one letter.');
        } else if (!/(?=.*\d)/.test(password)) {
            throw new BadRequestError('Password must contain at least one number.');
        } else {
            throw new BadRequestError('Allowed special characters in password: !@#$%&*,.?');
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await query('insert into users (username, email, password) values ($1, $2, $3) returning *', [req.body.username, req.body.email, hash]);
    const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_LIFETIME });

    res.status(201).json({ user: { username: newUser.rows[0].username, email: newUser.rows[0].email }, token });
};

const login = (req: Request, res: Response) => {
    res.send('Login route');
};

export { register, login };
