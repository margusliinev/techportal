import axios, { AxiosResponse } from 'axios';

interface NewUser {
    username: string;
    email: string;
    password: string;
}

interface User {
    email: string;
    password: string;
}

interface UserAPIResponse {
    user: {
        username: string;
        email: string;
    };
}

export const register = async (user: NewUser): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.post('http://localhost:5000/api/v1/register', user, {
        withCredentials: true,
    });
    return response;
};

export const login = async (user: User): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.post('http://localhost:5000/api/v1/login', user, {
        withCredentials: true,
    });
    return response;
};

export const logout = async () => {
    const response = axios.get('http://localhost:5000/api/v1/logout', {
        withCredentials: true,
    });
    return response;
};

export const getCurrentUserData = async (): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.get('http://localhost:5000/api/v1/users/me', {
        withCredentials: true,
    });
    return response;
};
