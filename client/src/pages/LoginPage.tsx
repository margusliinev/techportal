import { useState, useRef } from 'react';
import { useLoginMutation } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { Logo, FormRow, FormRowPassword, MemberCheck } from '../components';
import { UserLogin, CustomAPIError } from '../types';
import Wrapper from '../assets/styled_components/pages/LoginPage';

const initialState: UserLogin = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = useState<UserLogin>(initialState);
    const [login, { isLoading, error, isSuccess }] = useLoginMutation();
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.email && values.password) {
            login(values);
        } else if (!values.email || !values.password) {
            if (errorRef.current) {
                errorRef.current.textContent = 'Missing email or password';
            }
        }
    };

    if (isSuccess) {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {error ? (error as CustomAPIError).data.msg : isSuccess && 'Login successful! Welcome back'}
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
