import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setUser, logoutUser } from '../features/user/userSlice';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/styled_components/UserButton';

const UserButton = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();

    return (
        <Wrapper className='user-button'>
            {user ? (
                <div className='btn-container'>
                    <button
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}
                        onBlur={() => {
                            setTimeout(() => {
                                setShowLogout(!showLogout);
                            }, 100);
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
                        <button
                            className='dropdown-btn'
                            onClick={() => {
                                dispatch(setUser(null));
                                dispatch(logoutUser());
                            }}
                        >
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
