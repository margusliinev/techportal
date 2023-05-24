import express from 'express';
import { register, login, getAllUsers } from '../controllers/authController';

const router = express.Router();

router.route('/api/v1/auth/register').get(getAllUsers).post(register);
router.route('/api/v1/auth/login').post(login);

export default router;
