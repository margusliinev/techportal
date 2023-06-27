import { Link } from 'react-router-dom';

import { ChangePassword, DeleteAccount, Loader, PersonalInformation, Skills } from '../../components';
import { useAppSelector } from '../../hooks';
import Wrapper from '../../styles/styled_components/pages/dashboard/Profile';

const Profile = () => {
    const { user, userLoading } = useAppSelector((store) => store.user);

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
            <Skills />
            <div className='content-divider'></div>
            <DeleteAccount />
        </Wrapper>
    );
};

export default Profile;
