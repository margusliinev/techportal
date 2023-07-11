import express from 'express';

import { login } from '../controllers/authControllers/login';
import { logout } from '../controllers/authControllers/logout';
import { register } from '../controllers/authControllers/register';

const router = express.Router();

router.route('/api/v1/register').post(register);
router.route('/api/v1/login').post(login);
router.route('/api/v1/logout').post(logout);

export default router;
