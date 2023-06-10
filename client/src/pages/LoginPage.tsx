import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LogoBig, FormRow, FormRowPassword, MemberCheck } from '../components';
import { login } from '../utils/dataFetching';
import { useUserStore } from '../store';
import { UserLogin, CustomAPIError } from '../types';
import Wrapper from '../assets/Wrappers/Form';

const initialState: UserLogin = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = useState<UserLogin>(initialState);
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(login, {
        onSuccess: (data) => {
            setUser(data.data.user);
        },
    });
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const navigate = useNavigate();
    const { setUser } = useUserStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(values);
    };

    if (isSuccess) {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-logo'>
                        <LogoBig />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).response.data.msg : isSuccess && 'Login successful! Welcome back'}
                    </p>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <FormRowPassword type={'password'} name={'password'} value={values.password} labelText={'password'} forgot={true} handleChange={handleChange} />
                    <button type='submit' className={isLoading || isSuccess ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading || isSuccess}>
                        {isSuccess ? 'Redirecting...' : 'Sign In'}
                    </button>
                    <MemberCheck message={"Don't have an account?"} endpoint={'register'} />
                </form>
            </div>
        </Wrapper>
    );
};

export default LoginPage;
