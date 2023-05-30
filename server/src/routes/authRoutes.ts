import express from 'express';
import { register } from '../controllers/authControllers/register';
import { login } from '../controllers/authControllers/login';

const router = express.Router();

router.route('/api/v1/register').post(register);
router.route('/api/v1/login').post(login);

export default router;
