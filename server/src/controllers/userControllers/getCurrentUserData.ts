import { Request, Response } from 'express';

interface CustomRequest extends Request {
    user?: any;
}

const getCurrentUserData = async (req: CustomRequest, res: Response) => {
    const user = {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
    };
    res.status(200).json({ user });
};

export { getCurrentUserData };
