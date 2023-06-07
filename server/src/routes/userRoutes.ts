import express from 'express';
import { getUser } from '../controllers/userControllers/getUser';
import { deleteUser } from '../controllers/userControllers/deleteUser';
import { updateUserProfile } from '../controllers/userControllers/updateUserProfile';
import { updateUserPassword } from '../controllers/userControllers/updateUserPassword';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getUser).patch(AuthMiddleware, updateUserProfile).put(AuthMiddleware, updateUserPassword).delete(AuthMiddleware, deleteUser);

export default router;
