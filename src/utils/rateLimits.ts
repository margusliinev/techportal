import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP address, please try again later',
});

export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 30,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Login limit reached, please try again later' });
    },
});

export const resetLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Reset limit reached, please try again later' });
    },
});

export const verifyLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Verify limit reached, please try again later' });
    },
});

export const logoutLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Verify limit reached, please try again later' });
    },
});

export const registerLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Registration limit reached, please try again later' });
    },
});

export const forgotLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    message: (req: Request, res: Response) => {
        res.status(429).json({ success: false, msg: 'Email limit reached, please try again later' });
    },
});
