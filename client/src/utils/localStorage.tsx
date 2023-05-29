interface Return {
    user: {
        username: string;
        email: string;
    };
    token: string;
}

export const addUserToLocalStorage = (data: Return) => {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
};
