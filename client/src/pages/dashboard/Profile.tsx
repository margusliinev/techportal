import styled from 'styled-components';
import { PersonalInformation, ChangePassword, Loader } from '../../components';
import { useUserStore } from '../../store';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, userLoading } = useUserStore();

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
            <PersonalInformation />
            <div className='content-divider'></div>
            <ChangePassword />
            <div className='content-divider'></div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .profile-page-center {
        width: 90%;
        margin: 0 auto;
    }
    .personal-information,
    .change-password {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .personal-information-header,
    .change-password-header {
        margin-bottom: 1.5rem;
        h6 {
            margin-bottom: 0.25rem;
            color: var(--colorGray9);
        }
        p {
            color: var(--colorGray7);
            font-weight: 500;
        }
    }
    .personal-information-form,
    .change-password-form {
        .btn {
            padding: 0.5rem 0.75rem;
            margin-top: 1rem;
        }
    }
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
    .form-input-password-container {
        position: relative;
    }
    .password-toggle {
        position: absolute;
        right: 0.5rem;
        top: 0.45rem;
        display: grid;
        font-size: 1.4rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--colorGray4);
        transition: var(--transition);
    }
    .password-toggle:hover {
        color: var(--colorGray6);
    }
    .content-divider {
        height: 1px;
        width: 100%;
        background-color: var(--colorGray3);
        margin: 3rem 0;
    }
`;

export default Profile;
