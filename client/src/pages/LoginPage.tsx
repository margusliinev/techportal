import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormRow, FormRowPassword, Logo, MemberCheck } from '../components';
import { useLoginMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/pages/LoginPage';
import { CustomAPIError, UserLogin } from '../types';

const initialState: UserLogin = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = useState<UserLogin>(initialState);
    const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
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
        // Submit only if all fields are filled and if login is successful navigate to dashboard.

        if (values.email && values.password) {
            login(values)
                .unwrap()
                .then((response) => {
                    if (response.success) {
                        navigate('/');
                    }
                })
                .catch(() => {
                    return;
                });
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Login Successful'}
                    </p>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <FormRowPassword type={'password'} name={'password'} value={values.password} labelText={'password'} forgot={true} handleChange={handleChange} />
                    <button type='submit' className={isLoading ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading}>
                        Sign In
                    </button>
                    <MemberCheck message={"Don't have an account?"} endpoint={'register'} />
                </form>
            </div>
        </Wrapper>
    );
};

export default LoginPage;
