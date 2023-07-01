import express from 'express';

import { addSkill } from '../controllers/skillsControllers/addSkill';
import { deleteSkill } from '../controllers/skillsControllers/deleteSkill';
import { getSkills } from '../controllers/skillsControllers/getSkills';
import AuthMiddleware from '../middleware/auth';

const router = express.Router();

router.route('/api/v1/skills').get(AuthMiddleware, getSkills).post(AuthMiddleware, addSkill).delete(AuthMiddleware, deleteSkill);

export default router;
