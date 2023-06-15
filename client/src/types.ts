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

export interface UserReset {
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
    data: {
        msg: string;
    };
    status: number;
}
