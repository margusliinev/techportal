export interface User {
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

export interface UserUpdatePassword {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

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

export interface Job {
    id: number;
    company: string;
    position: string;
    employment: Employment;
    location: Location;
    salary: number;
    expire_date: Date;
    technologies: string[];
    company_logo: string;
    company_post: string;
}

export interface FilterStates {
    search: string;
    employment: string;
    location: string;
    sort: string;
    page: number;
}

export interface JobsAPIResponse {
    jobs: Job[];
    numOfPages: number;
    success: boolean;
    totalJobs: number;
}

export interface GetJobsParams {
    search?: string;
    employment?: string;
    location?: string;
    sort?: string;
    page?: number;
    limit?: number;
}

export interface JobAPIResponse {
    success: boolean;
    job: Job;
}

export interface UserAPIResponse {
    success: boolean;
    user: {
        username: string;
        email: string;
    };
}

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

export interface technology {
    technology: string;
    count: number;
}

export interface StatsAPIResponse {
    success: boolean;
    topTechnologies: technology[];
}
