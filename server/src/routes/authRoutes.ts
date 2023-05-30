import express from 'express';
import { register, login, getUserProfile } from '../controllers/authController';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/register').post(register);
router.route('/api/v1/login').post(login);
router.route('/api/v1/profile').get(AuthMiddleware, getUserProfile);

export default router;
