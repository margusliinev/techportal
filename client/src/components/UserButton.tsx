import { useState } from 'react';
import { FaCaretDown, FaCaretUp,FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/styled_components/components/UserButton';
import { logoutUser,setUser } from '../features/user/userSlice';
import { useAppDispatch,useAppSelector } from '../hooks';

const UserButton = () => {
    const [showLogout, setShowLogout] = useState<boolean>(false);
    const { user } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await dispatch(logoutUser());
        dispatch(setUser(null));
    };

    return (
        <Wrapper className='user-button'>
            {user ? (
                <div className='btn-container'>
                    <button
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}
                        onBlur={() => {
                            setTimeout(() => {
                                setShowLogout(false);
                            }, 150);
                        }}
                    >
                        <span>
                            <FaUserCircle />
                        </span>
                        <p>{user.username}</p>
                        <span>{showLogout ? <FaCaretUp /> : <FaCaretDown />}</span>
                    </button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <Link to={'/dashboard/profile'} className='dropdown-btn'>
                            Your Profile
                        </Link>
                        <button className='dropdown-btn' onClick={handleLogout}>
                            Sign Out
                        </button>
                    </div>
                </div>
            ) : (
                <Link to={'/login'}>
                    <button className='btn sign-in-btn'>
                        <span>
                            <FaUserCircle />
                        </span>
                        <p>Sign In</p>
                    </button>
                </Link>
            )}
        </Wrapper>
    );
};

export default UserButton;
