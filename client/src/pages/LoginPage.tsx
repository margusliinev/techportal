import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import Wrapper from '../assets/Wrappers/Form';
import { Logo, FormRow } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/loginUser';
import { addUserToLocalStorage } from '../utils/localStorage';

interface User {
    email: string;
    password: string;
}

const initialState: User = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = useState<User>(initialState);
    const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(loginUser);
    const navigate = useNavigate();
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = values;
        mutate({ email, password });
    };

    if (isSuccess) {
        addUserToLocalStorage(data.data);
        setTimeout(() => {
            navigate('/');
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
                        {isError ? (error as any).response.data.msg : isSuccess && 'Login successful! Welcome back'}
                    </p>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <div className='form-row'>
                        <div className='form-label-flex'>
                            <label htmlFor='password' className='form-label'>
                                password
                            </label>
                            <Link to={'/reset'} className='form-forgot-password'>
                                Forgot password?
                            </Link>
                        </div>
                        <input required type='password' value={values.password} name='password' onChange={handleChange} className='form-input' id='password' />
                        <p className='form-alert'></p>
                    </div>
                    <button type='submit' className={isLoading || isSuccess ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading || isSuccess}>
                        {isSuccess ? 'Redirecting...' : 'Sign In'}
                    </button>
                    <div className='member-check'>
                        <p>Don't have an account?</p>
                        <Link to={'/register'} className='member-btn'>
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default LoginPage;
