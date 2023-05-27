import { useState } from 'react';
import Wrapper from '../assets/Wrappers/Form';
import { Logo, FormRow } from '../components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword } from '../utils/formValidation';
import { useRegisterUserMutation } from '../features/api/apiSlice';

interface values {
    username: string;
    email: string;
    password: string;
}

const initialState: values = {
    username: '',
    email: '',
    password: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState<values>(initialState);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [allowValidation, setAllowValidation] = useState<boolean>(true);
    const [registerUser, { isLoading, isSuccess, isError }] = useRegisterUserMutation();

    const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLInputElement;
        e.preventDefault();
        nextElementSibling.focus();
        setAllowValidation(false);
        setTimeout(() => {
            setAllowValidation(true);
        }, 100);
        if (showPassword) {
            nextElementSibling.type = 'password';
        } else {
            nextElementSibling.type = 'text';
        }
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
        const parentElementSibling = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
        if (e.currentTarget.name === 'password') {
            e.currentTarget.classList.remove('form-input-error');
            parentElementSibling.textContent = '';
            parentElementSibling.classList.remove('form-alert-error');
        } else {
            e.currentTarget.classList.remove('form-input-error');
            nextElementSibling.textContent = '';
            nextElementSibling.classList.remove('form-alert-error');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
        const parentElementSibling = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
        if (allowValidation) {
            if (e.currentTarget.value === '') {
                return;
            }
            if (e.currentTarget.name === 'username') {
                if (!validateUsername(values.username)) {
                    if (values.username.length < 3 || values.username.length > 16) {
                        nextElementSibling.textContent = 'Username length: 3-16 characters.';
                    } else {
                        nextElementSibling.textContent = 'Username can only contain letters (A-Z) and numbers (0-9).';
                    }
                    e.currentTarget.classList.add('form-input-error');
                    nextElementSibling.classList.add('form-alert-error');
                }
            }
            if (e.currentTarget.name === 'email') {
                if (!validateEmail(values.email)) {
                    e.currentTarget.classList.add('form-input-error');
                    nextElementSibling.textContent = 'Please enter a valid email.';
                    nextElementSibling.classList.add('form-alert-error');
                }
            }
            if (e.currentTarget.name === 'password') {
                if (!validatePassword(values.password)) {
                    if (values.password.length < 8) {
                        parentElementSibling.textContent = 'Password must be at least 8 characters long.';
                    } else if (!/(?=.*[a-z])/.test(values.password)) {
                        parentElementSibling.textContent = 'Password must contain at least one letter.';
                    } else if (!/(?=.*\d)/.test(values.password)) {
                        parentElementSibling.textContent = 'Password must contain at least one number.';
                    } else {
                        parentElementSibling.textContent = 'Allowed special characters: !@#$%&*,.?';
                    }
                    e.currentTarget.classList.add('form-input-error');
                    parentElementSibling.classList.add('form-alert-error');
                }
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email, password } = values;
        if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
            // const newUser = { username, email, password };
            // if (isMember){
            //     console.log('user is already a member')
            // }
            console.log(values);
            registerUser(values);
            console.log('Registered User');
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <FormRow type={'text'} name={'username'} value={values.username} handleChange={handleChange} handleValidation={handleValidation} labelText={'username'} />
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} handleValidation={handleValidation} labelText={'email'} />
                    <div className='form-row'>
                        <label htmlFor='password' className='form-label'>
                            password
                        </label>
                        <div className='form-input-password-container'>
                            {values.password.length > 0 ? (
                                <button type='button' className='password-toggle' onMouseDown={handlePasswordVisibility}>
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            ) : null}
                            <input required type={'password'} value={values.password} name='password' onChange={handleChange} onBlur={handleValidation} className='form-input' id='password'></input>
                        </div>
                        <p className='form-alert'></p>
                    </div>
                    <button type='submit' className='btn form-btn' disabled={isLoading}>
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
