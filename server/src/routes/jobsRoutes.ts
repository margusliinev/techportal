import express from 'express';

import { getJobs } from '../controllers/jobsControllers/getJobs';

const router = express.Router();

router.route('/api/v1/jobs').get(getJobs);

export default router;
