import { useUserStore } from '../../store';
import { Link } from 'react-router-dom';
import { Loader } from '../../components';

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '3rem', width: '100%', height: '100%', textAlign: 'center', padding: '5rem' }}>
            <h3>Your username: {user.username}</h3>
            <h3>Your email: {user.email}</h3>
        </div>
    );
};

export default Profile;
