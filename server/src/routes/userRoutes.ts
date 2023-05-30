import express from 'express';
import { getUserProfile } from '../controllers/userControllers/userProfile';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getUserProfile);

export default router;
