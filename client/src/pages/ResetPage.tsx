import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FormRow } from '../components';
import { useResetMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/pages/ResetPage';
import { CustomAPIError, UserReset } from '../types';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const initialState: UserReset = {
    newPassword: '',
    confirmNewPassword: '',
    token: '',
    email: '',
};

const ResetPage = () => {
    const [reset, { isLoading, isError, error, isSuccess }] = useResetMutation();
    const [values, setValues] = useState<UserReset>(initialState);
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        // Grab params from URL and update the state. If params are missing redirect to login.
        const token = query.get('token');
        const email = query.get('email');

        if (!token || !email) {
            return navigate('/login');
        }

        setValues({ ...values, token: token, email: email });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validate that all fields are filled out and then submit the request.

        if (values.newPassword && values.confirmNewPassword && values.token && values.email) {
            await reset({ newPassword: values.newPassword, confirmNewPassword: values.confirmNewPassword, token: values.token, email: values.email });
        }
    };

    if (isSuccess) {
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    }

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <h5 className='reset-title'>Reset your password</h5>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Your password has been updated'}
                    </p>
                    <FormRow type={'password'} name={'newPassword'} value={values.newPassword} labelText={'New Password'} handleChange={handleChange} required={true} />
                    <FormRow type={'password'} name={'confirmNewPassword'} value={values.confirmNewPassword} labelText={'Confirm Password'} handleChange={handleChange} required={true} />
                    <button type='submit' className={isLoading || isSuccess ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading || isSuccess}>
                        {isSuccess ? 'Redirecting...' : 'continue'}
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
