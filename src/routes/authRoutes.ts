import express from 'express';

import { forgotPassword } from '../controllers/authControllers/forgot';
import { login } from '../controllers/authControllers/login';
import { logout } from '../controllers/authControllers/logout';
import { register } from '../controllers/authControllers/register';
import { resetPassword } from '../controllers/authControllers/reset';
import { verify } from '../controllers/authControllers/verify';

const router = express.Router();

router.route('/api/v1/register').post(register);
router.route('/api/v1/login').post(login);
router.route('/api/v1/logout').get(logout);
router.route('/api/v1/verify').post(verify);
router.route('/api/v1/forgot').post(forgotPassword);
router.route('/api/v1/reset').post(resetPassword);

export default router;
