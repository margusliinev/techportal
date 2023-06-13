import express from 'express';
import { getStats } from '../controllers/statsControllers/getStats';

const router = express.Router();

router.route('/api/v1/stats').get(getStats);

export default router;
