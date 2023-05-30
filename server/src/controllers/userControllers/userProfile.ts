import { Request, Response } from 'express';

interface CustomRequest extends Request {
    user?: any;
}

const getUserProfile = async (req: CustomRequest, res: Response) => {
    console.log(req.user);
    const user = {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
    };
    res.status(200).json({ user });
};

export { getUserProfile };
