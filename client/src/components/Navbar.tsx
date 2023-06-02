import { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/Wrappers/Navbar';
import { useNavigationStore } from '../store';

const Navbar = () => {
    const { toggleSidebar } = useNavigationStore();
    return (
        <Wrapper>
            <div className='nav-center'>
                <button className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button className='btn'>
                        <FaUserCircle />
                        margus
                    </button>
                    <div className='dropdown show-dropdown'>
                        <button className='dropdown-btn'>logout</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Navbar;
