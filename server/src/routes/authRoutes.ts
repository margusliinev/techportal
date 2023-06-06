import express from 'express';
import { register } from '../controllers/authControllers/register';
import { login } from '../controllers/authControllers/login';
import { logout } from '../controllers/authControllers/logout';

const router = express.Router();

router.route('/api/v1/register').post(register);
router.route('/api/v1/login').post(login);
router.route('/api/v1/logout').get(logout);

export default router;
