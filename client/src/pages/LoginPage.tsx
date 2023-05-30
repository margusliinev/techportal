import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Logo, FormRow, FormRowPassword, MemberCheck } from '../components';
import { login } from '../utils/dataFetching';
import Wrapper from '../assets/Wrappers/Form';

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
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(login);
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
                        <Logo />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as any).response.data.msg : isSuccess && 'Login successful! Welcome back'}
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
