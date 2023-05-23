import { Request, Response } from 'express';
import { query } from '../db/index';

const register = (req: Request, res: Response) => {
    res.send('Register route');
};

const login = (req: Request, res: Response) => {
    res.send('Login route');
};

export { register, login };
