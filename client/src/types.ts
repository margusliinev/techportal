// USER
export interface User {
    id: string;
    username: string;
    email: string;
}

export interface UserRegister {
    username: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserUpdateProfile {
    username: string;
    email: string;
}

export interface UserUpdatePassword {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface UserAPIResponse {
    success: boolean;
    user: {
        id: string;
        username: string;
        email: string;
    };
}

// JOBS

enum Employment {
    full_time = 'full-time',
    part_time = 'part-time',
    internship = 'internship',
    contractor = 'contract',
}

enum Location {
    remote = 'remote',
    part_remote = 'part-remote',
    tallinn = 'tallinn',
    tartu = 'tartu',
    parnu = 'parnu',
    narva = 'narva',
}

export interface technology {
    technology: string;
    count: number;
}

export interface Job {
    id: number;
    company: string;
    position: string;
    employment: Employment;
    location: Location;
    salary: number;
    expire_date: Date;
    technologies: string[];
    company_post: string;
}

export interface FilterStates {
    search: string;
    employment: string;
    location: string;
    sort: string;
    page: number;
}

export interface GetJobsParams {
    search?: string;
    employment?: string;
    location?: string;
    sort?: string;
    page?: number;
}

export interface GetRecommendedJobsParams {
    userId?: string;
}

export interface JobsAPIResponse {
    jobs: Job[];
    numOfPages: number;
    success: boolean;
    totalJobs: number;
}

export interface RecommendedJobsAPIResponse {
    recommendedJobs: Job[];
    success: boolean;
}

export interface JobAPIResponse {
    success: boolean;
    job: Job;
}

// SKILLS

export interface SkillsAPIResponse {
    success: boolean;
    skills: string[];
}

export interface NewSkill {
    skill: string;
}

// STATS

export interface StatsAPIResponse {
    success: boolean;
    topTechnologies: technology[];
}

// DEFAULT

export interface DefaultAPIResponse {
    success: boolean;
    msg: string;
}

export interface CustomAPIError {
    data: {
        msg: string;
    };
    status: number;
}
