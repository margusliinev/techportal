import { useRef, useState } from 'react';

import { FormRow } from '../components';
import { useLogoutMutation, useUpdateUserPasswordMutation } from '../features/api/apiSlice';
import { setUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks';
import Wrapper from '../styles/styled_components/components/ChangePassword';
import { CustomAPIError, UserUpdatePassword } from '../types';

const initialState: UserUpdatePassword = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

const ChangePassword = () => {
    const [values, setValues] = useState<UserUpdatePassword>(initialState);
    const [updateUserPassword, { isLoading, isError, error, isSuccess }] = useUpdateUserPasswordMutation();
    const [logout] = useLogoutMutation();
    const dispatch = useAppDispatch();
    const errorRef = useRef<HTMLParagraphElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const { currentPassword, newPassword, confirmNewPassword } = values;
        // Clear input fields if updating password is successful and logout the user if the request is unauthenticated.

        updateUserPassword({ currentPassword, newPassword, confirmNewPassword })
            .unwrap()
            .then((response) => {
                if (response.success) {
                    setValues({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
                }
            })
            .catch(async (error) => {
                if ((error as CustomAPIError).status === 401) {
                    await logout(null);
                    dispatch(setUser(null));
                }
            });
    };

    return (
        <Wrapper>
            <div className='change-password'>
                <div className='change-password-header'>
                    <h6>Change password</h6>
                    <p>Update the password associated with your account.</p>
                </div>
                <form className='change-password-form' onSubmit={handleSubmit}>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Your password has been updated'}
                    </p>
                    <FormRow
                        type={'password'}
                        name={'currentPassword'}
                        value={values.currentPassword}
                        labelText={'Current Password'}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormRow
                        type={'password'}
                        name={'newPassword'}
                        value={values.newPassword}
                        labelText={'New Password'}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormRow
                        type={'password'}
                        name={'confirmNewPassword'}
                        value={values.confirmNewPassword}
                        labelText={'Confirm Password'}
                        handleChange={handleChange}
                        required={true}
                    />
                    <button type='submit' className={isLoading ? 'btn form-btn-disabled' : 'btn'} disabled={isLoading}>
                        Save
                    </button>
                </form>
            </div>
        </Wrapper>
    );
};

export default ChangePassword;
