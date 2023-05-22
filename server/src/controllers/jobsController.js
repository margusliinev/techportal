import { query } from '../db/index.js';

const getAllJobs = (req, res) => {
    res.send('getAllJobs route');
};

export { getAllJobs };
