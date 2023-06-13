export interface UserRegister {
    username: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserReset {
    email: string;
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
        username: string;
        email: string;
    };
}

export interface CustomAPIError {
    response: {
        data: {
            msg: string;
        };
    };
}

enum Job_type {
    full_time = 'full-time',
    part_time = 'part-time',
    internship = 'internship',
    contractor = 'contractor',
}

enum Job_location {
    remote = 'remote',
    part_remote = 'part-remote',
    office = 'office',
}

export interface Job {
    id: number;
    logo: string;
    company: string;
    company_email: string;
    position: string;
    technologies: string[];
    job_type: Job_type;
    job_location: Job_location;
    salary: number;
    expire_date: string;
}

export interface JobsAPIResponse {
    success: boolean;
    jobs: Job[];
    numOfPages: number;
    totalJobs: number;
}

export interface technology {
    technology: string;
    count: number;
}

export interface StatsAPIResponse {
    success: boolean;
    topTechnologies: technology[];
}
