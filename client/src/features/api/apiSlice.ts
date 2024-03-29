import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    DefaultAPIResponse,
    GetJobsParams,
    GetRecommendedJobsParams,
    JobAPIResponse,
    JobsAPIResponse,
    NewSkill,
    RecommendedJobsAPIResponse,
    SkillsAPIResponse,
    StatsAPIResponse,
    UserAPIResponse,
    UserLogin,
    UserRegister,
    UserUpdatePassword,
    UserUpdateProfile,
} from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
    tagTypes: ['Skills'],
    endpoints: (builder) => ({
        // USER
        register: builder.mutation<DefaultAPIResponse, UserRegister>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        login: builder.mutation<DefaultAPIResponse, UserLogin>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            }),
        }),
        logout: builder.mutation<DefaultAPIResponse, null>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
        updateUserProfile: builder.mutation<UserAPIResponse, UserUpdateProfile>({
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
        // JOBS
        getJobs: builder.query<JobsAPIResponse, GetJobsParams>({
            query: (queryArgs) => ({
                url: '/jobs',
                method: 'GET',
                params: {
                    ...queryArgs,
                },
            }),
        }),
        getRecommendedJobs: builder.query<RecommendedJobsAPIResponse, GetRecommendedJobsParams>({
            query: (queryArgs) => ({
                url: '/jobs/recommended',
                method: 'GET',
                params: { ...queryArgs },
            }),
            providesTags: ['Skills'],
        }),
        // SKILLS
        getSkills: builder.query<SkillsAPIResponse, undefined>({
            query: () => ({
                url: '/skills',
                method: 'GET',
            }),
            providesTags: ['Skills'],
        }),
        addSkill: builder.mutation<DefaultAPIResponse, NewSkill>({
            query: (skill) => ({
                url: '/skills',
                method: 'POST',
                body: skill,
            }),
            invalidatesTags: ['Skills'],
        }),
        deleteSkill: builder.mutation<DefaultAPIResponse, NewSkill>({
            query: (skill) => ({
                url: '/skills',
                method: 'DELETE',
                body: skill,
            }),
            invalidatesTags: ['Skills'],
        }),
        getJob: builder.query<JobAPIResponse, string>({
            query: (jobID) => ({
                url: `/jobs/${jobID}`,
                method: 'GET',
            }),
        }),
        // STATS
        getStats: builder.query<StatsAPIResponse, undefined>({
            query: () => ({
                url: '/stats',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useUpdateUserProfileMutation,
    useUpdateUserPasswordMutation,
    useGetJobsQuery,
    useGetJobQuery,
    useGetStatsQuery,
    useAddSkillMutation,
    useGetSkillsQuery,
    useDeleteSkillMutation,
    useGetRecommendedJobsQuery,
} = apiSlice;
