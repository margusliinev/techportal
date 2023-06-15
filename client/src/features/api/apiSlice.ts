import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JobsAPIResponse, User, UserLogin, UserRegister, UserUpdatePassword } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user: UserRegister) => ({
                url: '/register',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (user: UserLogin) => ({
                url: '/login',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        updateUserProfile: builder.mutation({
            query: (profile: User) => ({
                url: '/users/me',
                method: 'PATCH',
                credentials: 'include',
                body: profile,
            }),
        }),
        updateUserPassword: builder.mutation({
            query: (password: UserUpdatePassword) => ({
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
    }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateUserProfileMutation, useUpdateUserPasswordMutation, useGetJobsQuery } = apiSlice;
