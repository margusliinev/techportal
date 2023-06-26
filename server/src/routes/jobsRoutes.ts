import express from 'express';

import { getJob } from '../controllers/jobsControllers/getJob';
import { getJobs } from '../controllers/jobsControllers/getJobs';

const router = express.Router();

router.route('/api/v1/jobs').get(getJobs);
router.route('/api/v1/jobs/:id').get(getJob);

export default router;
