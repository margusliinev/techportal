import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DefaultAPIResponse, GetJobsParams, JobAPIResponse, JobsAPIResponse, StatsAPIResponse, User, UserAPIResponse, UserLogin, UserRegister, UserUpdatePassword } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
    endpoints: (builder) => ({
        register: builder.mutation<UserAPIResponse, UserRegister>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        login: builder.mutation<UserAPIResponse, UserLogin>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            }),
        }),
        updateUserProfile: builder.mutation<UserAPIResponse, User>({
            query: (profile) => ({
                url: '/users/me',
                method: 'PATCH',
                body: profile,
            }),
        }),
        updateUserPassword: builder.mutation<DefaultAPIResponse, UserUpdatePassword>({
            query: (password) => ({
                url: '/users/me',
                method: 'PUT',
                body: password,
            }),
        }),
        getJobs: builder.query<JobsAPIResponse, GetJobsParams>({
            query: (queryArgs) => ({
                url: '/jobs',
                method: 'GET',
                params: {
                    ...queryArgs,
                },
            }),
        }),
        getJob: builder.query<JobAPIResponse, string>({
            query: (jobID) => ({
                url: `/jobs/${jobID}`,
                method: 'GET',
            }),
        }),
        getStats: builder.query<StatsAPIResponse, undefined>({
            query: () => ({
                url: '/stats',
                method: 'GET',
            }),
        }),
        getSkills: builder.query<DefaultAPIResponse, undefined>({
            query: () => ({
                url: '/users/me/skills',
                method: 'GET',
            }),
        }),
        AddSkill: builder.mutation<DefaultAPIResponse, string>({
            query: (skill) => ({
                url: '/users/me/skills',
                method: 'POST',
                body: skill,
            }),
        }),
        deleteSkill: builder.mutation<DefaultAPIResponse, string>({
            query: (skill) => ({
                url: '/users/me/skills',
                method: 'DELETE',
                body: skill,
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useUpdateUserProfileMutation,
    useUpdateUserPasswordMutation,
    useGetJobsQuery,
    useGetJobQuery,
    useGetStatsQuery,
    useAddSkillMutation,
    useGetSkillsQuery,
    useDeleteSkillMutation,
} = apiSlice;
