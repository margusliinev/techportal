import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateUserProfile } from '../utils/dataFetching';
import { FormRow } from '../components';
import { useUserStore } from '../store';
import { logout } from '../utils/dataFetching';
import { AxiosError } from 'axios';

interface CustomAPIError {
    response: {
        data: {
            msg: string;
        };
    };
}

interface PersonalInfo {
    username: string;
    email: string;
}

const initialState: PersonalInfo = {
    username: '',
    email: '',
};

const personalInformation = () => {
    const [values, setValues] = useState<PersonalInfo>(initialState);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const { user, setUser, userLoading } = useUserStore();
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(updateUserProfile, {
        onSuccess: (data) => {
            setUser(data.data.user);
            setValues(data.data.user);
        },
        onError: (error: AxiosError) => {
            if (error.response?.status === 401) {
                logout();
                setUser(null);
            }
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email } = values;
        mutate({ username, email });
        if (!isLoading) {
            setButtonDisabled(true);
            setTimeout(() => {
                setButtonDisabled(false);
            }, 1000);
        }
    };

    useEffect(() => {
        if (user) {
            setValues(user);
        }
    }, [userLoading]);

    return (
        <div className='profile-page-center'>
            <div className='personal-information'>
                <div className='personal-information-header'>
                    <h6>Personal Information</h6>
                    <p>Use a permanent address where you can receive mail.</p>
                </div>
                <form className='personal-information-form' onSubmit={handleSubmit}>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).response.data.msg : isSuccess && 'Your profile has been updated'}
                    </p>
                    <FormRow type={'text'} name={'username'} value={values.username} labelText={'username'} handleChange={handleChange} />
                    <FormRow type={'email'} name={'email'} value={values.email} labelText={'email'} handleChange={handleChange} />
                    <button type='submit' className={isButtonDisabled ? 'btn form-btn-disabled' : 'btn'} disabled={isButtonDisabled}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default personalInformation;
