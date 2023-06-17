import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DefaultAPIResponse, JobsAPIResponse, StatsAPIResponse, User, UserAPIResponse, UserLogin, UserRegister, UserUpdatePassword } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        register: builder.mutation<UserAPIResponse, UserRegister>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        login: builder.mutation<UserAPIResponse, UserLogin>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        updateUserProfile: builder.mutation<UserAPIResponse, User>({
            query: (profile) => ({
                url: '/users/me',
                method: 'PATCH',
                credentials: 'include',
                body: profile,
            }),
        }),
        updateUserPassword: builder.mutation<DefaultAPIResponse, UserUpdatePassword>({
            query: (password) => ({
                url: '/users/me',
                method: 'PUT',
                credentials: 'include',
                body: password,
            }),
        }),
        getJobs: builder.query<JobsAPIResponse, undefined>({
            query: () => ({
                url: '/jobs',
                method: 'GET',
                credentials: 'include',
            }),
        }),
        getStats: builder.query<StatsAPIResponse, undefined>({
            query: () => ({
                url: '/stats',
                method: 'GET',
                credentials: 'include',
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateUserProfileMutation, useUpdateUserPasswordMutation, useGetJobsQuery, useGetStatsQuery } = apiSlice;