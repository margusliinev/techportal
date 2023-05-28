import { useState } from 'react';
import Wrapper from '../assets/Wrappers/Form';
import { Logo, FormRow, FormRowPassword } from '../components';
import { Link } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword } from '../utils/formValidation';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
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
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <FormRow type={'text'} name={'username'} value={values.username} labelText={'username'} handleChange={handleChange} handleValidation={handleValidation} />
                    <FormRow type={'email'} name={'email'} value={values.email} labelText={'email'} handleChange={handleChange} handleValidation={handleValidation} />
                    <FormRowPassword type={'password'} name={'password'} value={values.password} labelText={'password'} handleChange={handleChange} handleValidation={handleValidation} />
                    <button type='submit' className='btn form-btn'>
                        Create new account'
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
