import express from 'express';
import AuthMiddleware from '../middleware/auth';
import { getUser } from '../controllers/userControllers/getUser';
import { deleteUser } from '../controllers/userControllers/deleteUser';
import { updateUserProfile } from '../controllers/userControllers/updateUserProfile';
import { updateUserPassword } from '../controllers/userControllers/updateUserPassword';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getUser).patch(AuthMiddleware, updateUserProfile).put(AuthMiddleware, updateUserPassword).delete(AuthMiddleware, deleteUser);

export default router;
