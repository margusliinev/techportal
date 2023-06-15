import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                credentials: 'include',
                body: user,
            }),
        }),
        updateUserProfile: builder.mutation({
            query: (profile) => ({
                url: '/users/me',
                method: 'PATCH',
                credentials: 'include',
                body: profile,
            }),
        }),
        updateUserPassword: builder.mutation({
            query: (password) => ({
                url: '/users/me',
                method: 'PUT',
                credentials: 'include',
                body: password,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateUserProfileMutation, useUpdateUserPasswordMutation } = apiSlice;
