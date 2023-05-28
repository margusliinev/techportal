import { Request, Response, NextFunction } from 'express';

const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    const defaultError = {
        statusCode: err.statusCode || 500,
        msg: err.message || 'Something went wrong, try again later',
    };
    if (err.code === '23505') {
        defaultError.statusCode = 400;
        defaultError.msg = 'Email address is already registered.';
    } else if (err.code === '23514') {
        defaultError.statusCode = 400;
        defaultError.msg = '400 Bad Request Error';
    }
    return res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandler;
