import Wrapper from '../assets/Wrappers/Form';
import { useState } from 'react';
import { Logo, FormRow } from '../components';
import { Link } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from '../utils/formValidation';

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        e.currentTarget.classList.remove('form-input-error');
        e.currentTarget.nextElementSibling.textContent = '';
        e.currentTarget.nextElementSibling.classList.remove('form-alert-error');
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleValidation = (e) => {
        if (e.currentTarget.value === '') {
            return;
        }

        if (e.currentTarget.name === 'username') {
            if (!validateUsername(values.username)) {
                if (values.username.length < 3 || values.username.length > 16) {
                    e.currentTarget.nextElementSibling.textContent = 'Username length: 3-16 characters.';
                } else {
                    e.currentTarget.nextElementSibling.textContent = 'Username can only contain letters (A-Z) and numbers (0-9).';
                }
                e.currentTarget.classList.add('form-input-error');
                e.currentTarget.nextElementSibling.classList.add('form-alert-error');
            }
        }
        if (e.currentTarget.name === 'email') {
            if (!validateEmail(values.email)) {
                e.currentTarget.nextElementSibling.textContent = 'Please enter a valid email.';
                e.currentTarget.classList.add('form-input-error');
                e.currentTarget.nextElementSibling.classList.add('form-alert-error');
            }
        }
        if (e.currentTarget.name === 'password') {
            if (!validatePassword(values.password)) {
                if (values.password.length < 8) {
                    e.currentTarget.nextElementSibling.textContent = 'Password must be at least 8 characters long.';
                } else if (!/(?=.*[a-z])/.test(values.password)) {
                    e.currentTarget.nextElementSibling.textContent = 'Password must contain at least one letter.';
                } else if (!/(?=.*\d)/.test(values.password)) {
                    e.currentTarget.nextElementSibling.textContent = 'Password must contain at least one number.';
                } else {
                    e.currentTarget.nextElementSibling.textContent = 'Invalid characters. Allowed special characters: !@#$%&*,.?';
                }
                e.currentTarget.classList.add('form-input-error');
                e.currentTarget.nextElementSibling.classList.add('form-alert-error');
            }
        }
        if (e.currentTarget.name === 'confirmPassword') {
            if (!validateConfirmPassword(values.password, values.confirmPassword)) {
                e.currentTarget.nextElementSibling.textContent = 'Passwords do not match.';
                e.currentTarget.classList.add('form-input-error');
                e.currentTarget.nextElementSibling.classList.add('form-alert-error');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateUsername(values.username) && validateEmail(values.email) && validatePassword(values.password) && validateConfirmPassword(values.password, values.confirmPassword)) {
            console.log(values);
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <FormRow type={'text'} name={'username'} value={values.username} handleChange={handleChange} handleValidation={handleValidation} labelText={'username'} />
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} handleValidation={handleValidation} labelText={'email'} />
                    <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange} handleValidation={handleValidation} labelText={'password'} />
                    <FormRow type={'password'} name={'confirmPassword'} value={values.confirmPassword} handleChange={handleChange} handleValidation={handleValidation} labelText={'confirm password'} />
                    <button type='submit' className='btn form-btn'>
                        Create new account
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
