import express from 'express';

import { addSkills } from '../controllers/userControllers/addSkills';
import { deleteUser } from '../controllers/userControllers/deleteUser';
import { getSkills } from '../controllers/userControllers/getSkills';
import { getUser } from '../controllers/userControllers/getUser';
import { updateUserPassword } from '../controllers/userControllers/updateUserPassword';
import { updateUserProfile } from '../controllers/userControllers/updateUserProfile';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/users/me').get(AuthMiddleware, getUser).patch(AuthMiddleware, updateUserProfile).put(AuthMiddleware, updateUserPassword).delete(AuthMiddleware, deleteUser);
router.route('/api/v1/users/me/skills').get(AuthMiddleware, getSkills).post(AuthMiddleware, addSkills);

export default router;
