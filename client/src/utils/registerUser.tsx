import axios from 'axios';

interface User {
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (user: User) => {
    const response = await axios.post('http://localhost:5000/api/v1/auth/register', user);
    return response;
};
