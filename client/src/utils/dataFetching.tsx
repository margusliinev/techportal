import axios, { AxiosResponse } from 'axios';
import { UserRegister, UserLogin, UserUpdateProfile, UserUpdatePassword, UserAPIResponse, JobsAPIResponse, StatsAPIResponse } from '../types';

export const register = async (user: UserRegister): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.post('http://localhost:5000/api/v1/register', user, {
        withCredentials: true,
    });
    return response;
};

export const login = async (user: UserLogin): Promise<AxiosResponse<UserAPIResponse, null>> => {
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

export const getUser = async (): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.get('http://localhost:5000/api/v1/users/me', {
        withCredentials: true,
    });
    return response;
};

export const deleteUser = async () => {
    const response = axios.delete('http://localhost:5000/api/v1/users/me', {
        withCredentials: true,
    });
    return response;
};

export const updateUserProfile = async (profile: UserUpdateProfile): Promise<AxiosResponse<UserAPIResponse, null>> => {
    const response = axios.patch('http://localhost:5000/api/v1/users/me', profile, {
        withCredentials: true,
    });
    return response;
};

export const updateUserPassword = async (password: UserUpdatePassword) => {
    const response = axios.put('http://localhost:5000/api/v1/users/me', password, {
        withCredentials: true,
    });
    return response;
};

export const getJobs = async (): Promise<AxiosResponse<JobsAPIResponse, null>> => {
    const response = axios.get('http://localhost:5000/api/v1/jobs', {
        withCredentials: true,
    });
    return response;
};

export const getStats = async (): Promise<AxiosResponse<StatsAPIResponse, null>> => {
    const response = axios.get('http://localhost:5000/api/v1/stats', {
        withCredentials: true,
    });
    return response;
};
