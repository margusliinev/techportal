import { Request, Response } from 'express';
import { query } from '../db/index';
import { BadRequestError } from '../errors';

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new BadRequestError('Missing username, email or password');
    }
    const uniqueEmail = await query('select email from users where email = $1', [email]);
    if (uniqueEmail) {
        throw new BadRequestError('Email address is already registered.');
    }
    const user = await query('insert into users (username, email, password) values ($1, $2, $3) returning *', [req.body.username, req.body.email, req.body.password]);
    res.status(201).json({ user });
};

const getAllUsers = async (req: Request, res: Response) => {
    const users = await query('select * from users');
    res.status(200).json({ users });
};

const login = (req: Request, res: Response) => {
    res.send('Login route');
};

export { register, login, getAllUsers };
