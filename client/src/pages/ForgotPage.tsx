import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FormRow } from '../components';
import { useForgotMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/pages/ForgotPage';
import { CustomAPIError, UserForgot } from '../types';

const initialState: UserForgot = {
    email: '',
};

const ForgotPage = () => {
    const [values, setValues] = useState<UserForgot>(initialState);
    const [forgot, { isLoading, isError, error, isSuccess }] = useForgotMutation();
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.email) {
            await forgot({ email: values.email });
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <h5 className='reset-title'>Forgot your password?</h5>
                    <p className='reset-description'>Enter the email address associated with your account and we&apos;ll send you a link to reset your password.</p>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Please check your email to reset your password'}
                    </p>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <button type='submit' className={isLoading ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading}>
                        Continue
                    </button>
                    <Link to={'/login'} className='return-btn'>
                        Return to Login
                    </Link>
                </form>
            </div>
        </Wrapper>
    );
};

export default ForgotPage;
