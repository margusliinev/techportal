// Form validation for user registration which will be triggered when input loses focus.

export const handleValidation = (e: React.ChangeEvent<HTMLInputElement>, username: string, email: string, password: string) => {
    const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
    const { name, value } = e.currentTarget;

    const showError = (message: string) => {
        e.currentTarget.classList.add('form-input-error');
        nextElementSibling.textContent = message;
        nextElementSibling.classList.add('form-alert-error');
    };

    if (value === '') {
        return;
    }

    if (name === 'username') {
        if (username.length < 3 || username.length > 16) {
            showError('Username length: 3-16 characters.');
        } else if (!/^[A-Za-z0-9]{3,16}$/.test(username)) {
            showError('Username can only contain letters (A-Z) and numbers (0-9).');
        }
    }

    if (name === 'email') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('Please enter a valid email.');
        }
    }

    if (name === 'password') {
        if (password.length < 8) {
            showError('Password must be at least 8 characters long.');
        } else if (!/(?=.*[a-z])/.test(password)) {
            showError('Password must contain at least one letter.');
        } else if (!/(?=.*\d)/.test(password)) {
            showError('Password must contain at least one number.');
        } else if (!/^[A-Za-z\d!@#$%&*,.?]{8,}$/.test(password)) {
            showError('Allowed special characters: !@#$%&*,.?');
        }
    }
};

// Validate all the fields before user registration form is submitted.

export const validateUsername = (username: string) => {
    const regex = /^[A-Za-z0-9]{3,16}$/;

    if (!regex.test(username)) {
        return false;
    }

    return true;
};

export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        return false;
    }

    return true;
};

export const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%&*,.?]{8,}$/;

    if (!regex.test(password)) {
        return false;
    }

    return true;
};
