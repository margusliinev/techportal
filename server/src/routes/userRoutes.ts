import express from 'express';
import { getCurrentUserData } from '../controllers/userControllers/getCurrentUserData';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getCurrentUserData);

export default router;
