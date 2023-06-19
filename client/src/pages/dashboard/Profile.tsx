import { Link } from 'react-router-dom';

import Wrapper from '../../assets/styled_components/pages/dashboard/Profile';
import { ChangePassword, DeleteAccount, Loader,PersonalInformation } from '../../components';
import { useAppSelector } from '../../hooks';

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
            <DeleteAccount />
        </Wrapper>
    );
};

export default Profile;
