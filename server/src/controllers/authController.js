import { query } from '../db/index.js';

const register = (req, res) => {
    res.send('Register route');
};

const login = (req, res) => {
    res.send('Login route');
};

export { register, login };
