import { Request, Response } from 'express';
import { query } from '../db/index';
import { BadRequestError, UnAuthenticatedError } from '../errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createCookie } from '../utils/createCookie';

interface CustomRequest extends Request {
    user?: any;
}

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

    res.status(201).json({ user: { username: newUser.rows[0].username, email: newUser.rows[0].email } });
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Missing email or password');
    }

    const user = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (!user.rows[0]) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }
    const hashedPassword = user.rows[0].password;

    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Incorrect email or password');
    }

    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_LIFETIME });
    createCookie({ res, token });

    res.status(200).json({ user: { username: user.rows[0].username, email: user.rows[0].email } });
};

const getUserProfile = async (req: CustomRequest, res: Response) => {
    console.log(req.user);
    // const user = await query('SELECT * FROM users WHERE id = $1', [req.user.userId]);
    const user = {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
    };
    res.status(200).json({ user });
};

export { register, login, getUserProfile };
