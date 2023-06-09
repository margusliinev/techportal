import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { useUserStore } from '../store';
import { useNavigationStore } from '../store';
import { logout } from '../utils/dataFetching';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { toggleSidebar } = useNavigationStore();
    const { user, setUser } = useUserStore();

    return (
        <Wrapper>
            <div className='nav-center'>
                <div className='nav-container'>
                    <button className='toggle-btn' onClick={() => toggleSidebar()}>
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
                            <p>{user.username}</p>
                            <span>{showLogout ? <FaCaretUp /> : <FaCaretDown />}</span>
                        </button>
                        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                            <Link to={'/dashboard/profile'} className='dropdown-btn' onClick={() => setShowLogout(!showLogout)}>
                                Your Profile
                            </Link>
                            <button
                                className='dropdown-btn'
                                onClick={() => {
                                    logout();
                                    setUser(null);
                                    setShowLogout(!showLogout);
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <button className='btn'>
                            <span>
                                <FaUserCircle />
                            </span>
                            <p>Sign In</p>
                        </button>
                    </Link>
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    background-color: #eff6ff;
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90vw;
    }
    .nav-container {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .toggle-btn {
            background: transparent;
            border-color: transparent;
            font-size: 1.8rem;
            color: var(--colorPrimary5);
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: var(--transition);
        }
        .toggle-btn:hover {
            color: var(--colorPrimary6);
        }
        .content-divider-vertical {
            width: 0.11rem;
            height: 25px;
            background-color: var(--colorPrimary3);
        }
        .nav-title {
            font-size: 1.75rem;
            color: var(--colorGray9);
        }
    }
    .btn-container {
        position: relative;
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border-radius: var(--radius-2xl);
            span {
                display: grid;
                font-size: 1.25rem;
            }
            p {
                font-weight: 500;
                font-size: 16px;
                align-self: end;
            }
        }
        .dropdown {
            position: absolute;
            top: 40px;
            right: 0;
            width: 8rem;
            background-color: var(--colorWhite);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            visibility: hidden;
            border-radius: var(--radius-md);
            border: 1px solid var(--colorGray2);
        }
        .show-dropdown {
            visibility: visible;
        }
        .dropdown-btn {
            display: block;
            width: 100%;
            text-align: left;
            background: transparent;
            border-color: transparent;
            cursor: pointer;
            font-size: 14px;
            color: var(--colorGray9);
        }
        .dropdown-btn:nth-of-type(1) {
            padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        }
        .dropdown-btn:nth-of-type(2) {
            padding: 0.25rem 0.5rem 0.5rem 0.5rem;
        }
        .dropdown-btn:hover {
            background-color: var(--colorGray1);
        }
    }
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border-radius: var(--radius-2xl);
        span {
            display: grid;
            font-size: 1.25rem;
        }
        p {
            align-self: end;
        }
    }
    @media (max-width: 450px) {
        .btn-container {
            display: none;
        }
        .content-divider-vertical {
            display: none;
        }
        .nav-container {
            justify-content: space-between;
            flex-direction: row-reverse;
        }
        .nav-center {
            display: initial;
        }
    }
    @media (min-width: 992px) {
        .nav-center {
            width: 90%;
        }
        .nav-container {
            .toggle-btn {
                display: none;
            }
        }
        .content-divider-vertical {
            position: absolute;
            left: 0;
        }
    }
`;

export default Navbar;
