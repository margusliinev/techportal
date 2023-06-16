import { useState, useRef } from 'react';
import { FormRow } from '../components';
import { Link } from 'react-router-dom';
import { UserReset } from '../types';
import Wrapper from '../assets/styled_components/pages/ResetPage';

const initialState: UserReset = {
    email: '',
};

const ResetPage = () => {
    const [values, setValues] = useState<UserReset>(initialState);
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.email) {
            // reset(values);
        } else if (!values.email) {
            if (errorRef.current) {
                errorRef.current.textContent = 'Missing email or password';
            }
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <h5 className='reset-title'>Reset your password</h5>
                    <p className='reset-description'>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    {/* <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {error ? (error as CustomAPIError).data.msg : isSuccess && 'Please check your email and follow the instructions to reset your password'}
                    </p> */}
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <button type='submit' className='btn form-btn'>
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

export default ResetPage;
