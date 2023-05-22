import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.route('/api/v1/auth/register').post(register);
router.route('/api/v1/auth/login').post(login);

export default router;
