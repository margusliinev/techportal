import { Request, Response, NextFunction } from 'express';

const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    return res.status(500).json({ msg: err.message });
};

export default errorHandler;
