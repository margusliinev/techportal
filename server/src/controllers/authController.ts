import { Request, Response } from 'express';
import { query } from '../db/index';

const register = async (req: Request, res: Response) => {
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
