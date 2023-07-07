import express from 'express';

import { forgotPassword } from '../controllers/authControllers/forgot';
import { login } from '../controllers/authControllers/login';
import { logout } from '../controllers/authControllers/logout';
import { register } from '../controllers/authControllers/register';
import { resetPassword } from '../controllers/authControllers/reset';
import { verify } from '../controllers/authControllers/verify';
import { forgotLimiter, loginLimiter, logoutLimiter, registerLimiter, resetLimiter, verifyLimiter } from '../utils/rateLimits';

const router = express.Router();

router.route('/api/v1/register').post(registerLimiter, register);
router.route('/api/v1/login').post(loginLimiter, login);
router.route('/api/v1/logout').get(logoutLimiter, logout);
router.route('/api/v1/verify').post(verifyLimiter, verify);
router.route('/api/v1/forgot').post(forgotLimiter, forgotPassword);
router.route('/api/v1/reset').post(resetLimiter, resetPassword);

export default router;
