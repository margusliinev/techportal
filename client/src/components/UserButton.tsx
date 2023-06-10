import styled from 'styled-components';
import { useState } from 'react';
import { useUserStore } from '../store';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { logout } from '../utils/dataFetching';
import { Link } from 'react-router-dom';

const UserButton = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user, setUser } = useUserStore();

    return (
        <Wrapper>
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

const Wrapper = styled.div`
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
    .sign-in-btn {
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
        .btn-container,
        .sign-in-btn {
            display: none;
        }
    }
`;

export default UserButton;
