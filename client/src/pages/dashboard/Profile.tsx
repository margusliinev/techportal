import styled from 'styled-components';
import { PersonalInformation, ChangePassword, DeleteAccount, Loader } from '../../components';
import { useUserStore } from '../../store';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, userLoading } = useUserStore();

    if (userLoading) {
        return (
            <Wrapper>
                <div className='profile-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (!user) {
        return (
            <Wrapper>
                <div className='profile-center'>
                    <div className='logged-out'>
                        <h3>Please login to access your profile</h3>
                        <Link className='btn' to={'/login'}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </Wrapper>
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
    width: 100%;
    height: fit-content;
    padding: 2rem 2.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    background-color: var(--colorBackgroundSecondary);
    @media screen and (max-width: 400px) {
        padding: 2rem 1.5rem;
    }
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
            color: var(--colorFontPrimary);
            margin-bottom: 0.25rem;
        }
        p {
            color: var(--colorFontSecondary);
            font-size: 15px;
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
            background-color: var(--colorRed3);
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
        color: var(--colorRed1);
    }
    .server-message-success {
        color: var(--colorGreen1);
    }
    .content-divider {
        height: 0.1px;
        width: 100%;
        background-color: var(--colorGray5);
        margin: 3rem 0;
    }
    .profile-center {
        display: grid;
        place-items: center;
        height: calc(100vh - 13rem);
    }
    .logged-out {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
        .btn {
            font-size: 22px;
        }
    }
`;

export default Profile;
