import express from 'express';
import { getCurrentUser } from '../controllers/userControllers/getCurrentUser';
import { updateUser } from '../controllers/userControllers/updateUser';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getCurrentUser).patch(AuthMiddleware, updateUser);

export default router;
