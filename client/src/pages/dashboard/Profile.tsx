import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store';
import { Loader } from '../../components';
import { FormRow } from '../../components';
import { updateUserProfile } from '../../utils/dataFetching';

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

const Profile = () => {
    const [values, setValues] = useState<PersonalInfo>(initialState);
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const { user, setUser, userLoading } = useUserStore();
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(updateUserProfile, {
        onSuccess: (data) => {
            setUser(data.data.user);
            setValues(data.data.user);
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
    };

    useEffect(() => {
        const errorTimeout = setTimeout(() => {
            if (errorRef.current) {
                errorRef.current.textContent = '';
            }
        }, 3000);

        return () => {
            clearTimeout(errorTimeout);
        };
    }, [isSuccess]);

    useEffect(() => {
        if (user) {
            setValues(user);
        }
    }, [userLoading]);

    if (userLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Loader />
            </div>
        );
    }

    if (!user) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '3rem', width: '100%', height: '100%', textAlign: 'center', padding: '5rem' }}>
                <h3>Please login to access your profile</h3>
                <Link className='btn' style={{ fontSize: '24px' }} to={'/login'}>
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <Wrapper className='profile-page'>
            <div className='profile-page-center'>
                <div className='personal-information'>
                    <div className='personal-information-header'>
                        <h6>Personal Information</h6>
                        <p>Use a permanent address where you can receive mail.</p>
                    </div>
                    <form className='personal-information-form' onSubmit={handleSubmit}>
                        <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                            {isError ? (error as CustomAPIError).response.data.msg : isSuccess && 'Your information has been updated'}
                        </p>
                        <FormRow type={'text'} name={'username'} value={values.username} labelText={'username'} handleChange={handleChange} />
                        <FormRow type={'email'} name={'email'} value={values.email} labelText={'email'} handleChange={handleChange} />
                        <button type='submit' className={isLoading ? 'btn form-btn-disabled' : 'btn'} disabled={isLoading}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
    .server-message {
        margin: 0.5rem 0;
        font-weight: 400;
        letter-spacing: -0.01rem;
    }
    .server-message-error {
        color: var(--colorRed2);
    }
    .server-message-success {
        color: var(--colorGreen2);
    }
`;

export default Profile;
