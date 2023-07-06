import express from 'express';

import { getJob } from '../controllers/jobsControllers/getJob';
import { getJobs } from '../controllers/jobsControllers/getJobs';
import { getRecommendedJobs } from '../controllers/jobsControllers/getRecommendedJobs';

const router = express.Router();

router.route('/api/v1/jobs').get(getJobs);
router.route('/api/v1/jobs/recommended').get(getRecommendedJobs);
router.route('/api/v1/jobs/:id').get(getJob);

export default router;
