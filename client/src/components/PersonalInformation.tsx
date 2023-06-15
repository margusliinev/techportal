import { useState, useEffect, useRef } from 'react';
import { FormRow } from '../components';
import { User, CustomAPIError } from '../types';
import { useUpdateUserProfileMutation } from '../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutUser, setUser } from '../features/user/userSlice';
import Wrapper from '../assets/styled_components/components/PersonalInformation';

const initialState: User = {
    username: '',
    email: '',
};

const personalInformation = () => {
    const [values, setValues] = useState<User>(initialState);
    const [updateUser, { isLoading, isError, error, isSuccess }] = useUpdateUserProfileMutation();
    const { user, userLoading } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email } = values;
        try {
            const response = await updateUser({ username, email }).unwrap();
            dispatch(setUser(response.user));
            setValues(response.user);
        } catch (error) {
            if ((error as CustomAPIError).status === 401) {
                dispatch(logoutUser());
                dispatch(setUser(null));
            }
        }
    };

    useEffect(() => {
        if (user) {
            setValues(user);
        }
    }, [userLoading]);

    return (
        <Wrapper>
            <div className='personal-information'>
                <div className='personal-information-header'>
                    <h6>Personal Information</h6>
                    <p>Use a permanent address where you can receive mail.</p>
                </div>
                <form className='personal-information-form' onSubmit={handleSubmit}>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Your profile has been updated'}
                    </p>
                    <FormRow type={'text'} name={'username'} value={values.username} labelText={'username'} handleChange={handleChange} />
                    <FormRow type={'email'} name={'email'} value={values.email} labelText={'email'} handleChange={handleChange} />
                    <button type='submit' className={isLoading ? 'btn form-btn-disabled' : 'btn'} disabled={isLoading}>
                        Save
                    </button>
                </form>
            </div>
        </Wrapper>
    );
};

export default personalInformation;
