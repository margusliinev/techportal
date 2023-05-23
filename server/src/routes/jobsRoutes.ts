import express from 'express';
import { getAllJobs } from '../controllers/jobsController';

const router = express.Router();

router.route('/api/v1/jobs').get(getAllJobs);

export default router;
