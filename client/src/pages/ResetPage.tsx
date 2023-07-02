import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FormRow } from '../components';
import Wrapper from '../styles/styled_components/pages/ResetPage';
import { UserReset } from '../types';

const initialState: UserReset = {
    email: '',
};

const ResetPage = () => {
    const [values, setValues] = useState<UserReset>(initialState);
    // const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <h5 className='reset-title'>Reset your password</h5>
                    <p className='reset-description'>Enter the email address associated with your account and we&apos;ll send you a link to reset your password.</p>
                    {/* <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Please check your email and follow the instructions to reset your password'}
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
