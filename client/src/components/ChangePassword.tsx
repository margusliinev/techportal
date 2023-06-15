import { useState, useRef } from 'react';
import { FormRow } from '../components';
import { CustomAPIError, UserUpdatePassword } from '../types';

const initialState: UserUpdatePassword = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

const ChangePassword = () => {
    const [values, setValues] = useState<UserUpdatePassword>(initialState);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    // const { mutate, isLoading, isError, error, isSuccess } = useMutation(updateUserPassword, {
    //     onSuccess: () => {
    //         setValues({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    //     },
    //     onError: (error: AxiosError) => {
    //         if (error.response?.status === 401) {
    //             logout();
    //             setUser(null);
    //         }
    //     },
    // });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const { currentPassword, newPassword, confirmNewPassword } = values;
        // mutate({ currentPassword, newPassword, confirmNewPassword });
        // if (!isLoading) {
        //     setButtonDisabled(true);
        //     setTimeout(() => {
        //         setButtonDisabled(false);
        //     }, 1000);
        // }
    };

    return (
        <div className='change-password'>
            <div className='change-password-header'>
                <h6>Change password</h6>
                <p>Update your password associated with your account.</p>
            </div>
            <form className='change-password-form' onSubmit={handleSubmit}>
                {/* <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                    {isError ? (error as CustomAPIError).response.data.msg : isSuccess && 'Your password has been updated'}
                </p> */}
                <FormRow type={'password'} name={'currentPassword'} value={values.currentPassword} labelText={'Current Password'} handleChange={handleChange} />
                <FormRow type={'password'} name={'newPassword'} value={values.newPassword} labelText={'New Password'} handleChange={handleChange} />
                <FormRow type={'password'} name={'confirmNewPassword'} value={values.confirmNewPassword} labelText={'Confirm Password'} handleChange={handleChange} />
                <button type='submit' className={isButtonDisabled ? 'btn form-btn-disabled' : 'btn'} disabled={isButtonDisabled}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
