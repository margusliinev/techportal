import axios from 'axios';

interface NewUser {
    username: string;
    email: string;
    password: string;
}

interface User {
    email: string;
    password: string;
}

export const register = async (user: NewUser) => {
    const response = axios.post('http://localhost:5000/api/v1/register', user, {
        withCredentials: true,
    });
    return response;
};

export const login = async (user: User) => {
    const response = axios.post('http://localhost:5000/api/v1/login', user, {
        withCredentials: true,
    });
    return response;
};
