import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import Wrapper from '../assets/Wrappers/Navbar';
import { useUserStore } from '../store';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user } = useUserStore();
    return (
        <Wrapper>
            <div className='nav-center'>
                <div className='nav-container'>
                    <button className='toggle-btn'>
                        <BiMenu />
                    </button>
                    <div className='content-divider-vertical'></div>
                    <h4 className='nav-title'>Dashboard</h4>
                </div>
                {user ? (
                    <div className='btn-container'>
                        <button className='btn' onClick={() => setShowLogout(!showLogout)}>
                            <span>
                                <FaUserCircle />
                            </span>
                            <p>Margus</p>
                            <span>{showLogout ? <FaCaretUp /> : <FaCaretDown />}</span>
                        </button>
                        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                            <button className='dropdown-btn'>Your Profile</button>
                            <button className='dropdown-btn'>Sign Out</button>
                        </div>
                    </div>
                ) : (
                    <Link to={'/login'} className='btn sign-in-btn'>
                        <span>
                            <FaUserCircle />
                        </span>
                        Sign In
                    </Link>
                )}
            </div>
        </Wrapper>
    );
};
export default Navbar;
