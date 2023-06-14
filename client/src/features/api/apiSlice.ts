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
        logout: builder.query({
            query: () => ({
                url: '/logout',
                method: 'GET',
                credentials: 'include',
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutQuery } = apiSlice;
