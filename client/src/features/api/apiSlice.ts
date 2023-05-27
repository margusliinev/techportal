import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
    username: string;
    email: string;
    password: string;
}

interface Return {
    data: {
        token: string;
        user: Partial<User>;
    };
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<Return, User>({
            query: (user) => ({
                url: 'auth/register',
                method: 'POST',
                body: user,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = apiSlice;
