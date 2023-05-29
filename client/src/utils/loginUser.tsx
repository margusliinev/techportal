import axios from 'axios';

interface User {
    email: string;
    password: string;
}

export const loginUser = async (user: User) => {
    const response = await axios.post('http://localhost:5000/api/v1/auth/login', user);
    return response;
};
