import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import Wrapper from '../assets/Wrappers/Form';
import { Logo, FormRow, FormRowPassword } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword } from '../utils/formValidation';
import { registerUser } from '../utils/registerUser';
import { addUserToLocalStorage } from '../utils/localStorage';

interface User {
    username: string;
    email: string;
    password: string;
}

const initialState: User = {
    username: '',
    email: '',
    password: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState<User>(initialState);
    const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(registerUser);
    const navigate = useNavigate();
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        e.currentTarget.classList.remove('form-input-error');
        nextElementSibling.textContent = '';
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            if (!validateUsername(values.username)) {
                if (values.username.length < 3 || values.username.length > 16) {
                    showError('Username length: 3-16 characters.');
                } else {
                    showError('Username can only contain letters (A-Z) and numbers (0-9).');
                }
            }
        }

        if (name === 'email') {
            if (!validateEmail(values.email)) {
                showError('Please enter a valid email.');
            }
        }

        if (name === 'password') {
            if (!validatePassword(values.password)) {
                if (values.password.length < 8) {
                    showError('Password must be at least 8 characters long.');
                } else if (!/(?=.*[a-z])/.test(values.password)) {
                    showError('Password must contain at least one letter.');
                } else if (!/(?=.*\d)/.test(values.password)) {
                    showError('Password must contain at least one number.');
                } else {
                    showError('Allowed special characters: !@#$%&*,.?');
                }
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email, password } = values;
        if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
            mutate({ username, email, password });
        }
    };

    if (isSuccess) {
        addUserToLocalStorage(data.data);
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    }

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as any).response.data.msg : isSuccess && 'Your account has been created'}
                    </p>
                    <FormRow type={'text'} name={'username'} value={values.username} labelText={'username'} handleChange={handleChange} handleValidation={handleValidation} />
                    <FormRow type={'email'} name={'email'} value={values.email} labelText={'email'} handleChange={handleChange} handleValidation={handleValidation} />
                    <FormRowPassword type={'password'} name={'password'} value={values.password} labelText={'password'} handleChange={handleChange} handleValidation={handleValidation} />
                    <button type='submit' className={isLoading || isSuccess ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading || isSuccess}>
                        {isSuccess ? 'Redirecting...' : 'Create new account'}
                    </button>
                    <div className='member-check'>
                        <p>Already have an account?</p>
                        <Link to={'/login'} type='button' className='member-btn'>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
