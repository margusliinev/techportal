import { useState, useRef } from 'react';
import { FormRow } from '../components';
import { CustomAPIError, UserUpdatePassword } from '../types';
import { useUpdateUserPasswordMutation } from '../features/api/apiSlice';
import { useAppDispatch } from '../hooks';
import { logoutUser, setUser } from '../features/user/userSlice';
import Wrapper from '../assets/styled_components/components/ChangePassword';

const initialState: UserUpdatePassword = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

const ChangePassword = () => {
    const [values, setValues] = useState<UserUpdatePassword>(initialState);
    const [updateUserPassword, { isLoading, isError, error, isSuccess }] = useUpdateUserPasswordMutation();
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
        const { currentPassword, newPassword, confirmNewPassword } = values;
        try {
            const response = await updateUserPassword({ currentPassword, newPassword, confirmNewPassword }).unwrap();
            if (response.success) {
                setValues({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
            }
        } catch (error) {
            if ((error as CustomAPIError).status === 401) {
                dispatch(logoutUser());
                dispatch(setUser(null));
            }
        }
    };

    return (
        <Wrapper>
            <div className='change-password'>
                <div className='change-password-header'>
                    <h6>Change password</h6>
                    <p>Update your password associated with your account.</p>
                </div>
                <form className='change-password-form' onSubmit={handleSubmit}>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Your password has been updated'}
                    </p>
                    <FormRow type={'password'} name={'currentPassword'} value={values.currentPassword} labelText={'Current Password'} handleChange={handleChange} />
                    <FormRow type={'password'} name={'newPassword'} value={values.newPassword} labelText={'New Password'} handleChange={handleChange} />
                    <FormRow type={'password'} name={'confirmNewPassword'} value={values.confirmNewPassword} labelText={'Confirm Password'} handleChange={handleChange} />
                    <button type='submit' className={isLoading ? 'btn form-btn-disabled' : 'btn'} disabled={isLoading}>
                        Save
                    </button>
                </form>
            </div>
        </Wrapper>
    );
};

export default ChangePassword;
