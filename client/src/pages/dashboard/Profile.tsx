import styled from 'styled-components';
import { PersonalInformation, ChangePassword, DeleteAccount, Loader } from '../../components';
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '3rem', width: '100%', height: '100%', textAlign: 'center' }}>
                <h3>Please login to access your profile</h3>
                <Link className='btn' style={{ fontSize: '24px' }} to={'/login'}>
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <Wrapper>
            <PersonalInformation />
            <div className='content-divider'></div>
            <ChangePassword />
            <div className='content-divider'></div>
            <DeleteAccount />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .personal-information,
    .change-password,
    .delete-account {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .personal-information-header,
    .change-password-header,
    .delete-account-header {
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
    .delete-account-header {
        p {
            max-width: 400px;
        }
    }
    .delete-account-form {
        .btn {
            background-color: var(--colorRed2);
            justify-self: start;
        }
        .btn:hover {
            background-color: #c41e1e;
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
    .content-divider {
        height: 0.1px;
        width: 100%;
        background-color: var(--colorGray3);
        margin: 3rem 0;
    }
`;

export default Profile;
