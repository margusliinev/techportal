const validateUsername = (username) => {
    const regex = /^[A-Za-z0-9]{3,16}$/;

    if (!regex.test(username)) {
        return false;
    }

    return true;
};

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        return false;
    }

    return true;
};

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%&*,.?]{8,}$/;

    if (!regex.test(password)) {
        return false;
    }

    return true;
};

export { validateUsername, validateEmail, validatePassword };
