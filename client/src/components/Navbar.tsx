import { BiMenu } from 'react-icons/bi';

import { DarkModeToggle, UserButton } from '../components';
import { toggleNavigation } from '../features/navigation/navigationSlice';
import { useAppDispatch } from '../hooks';
import Wrapper from '../styles/styled_components/components/Navbar';

const Navbar = () => {
    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            <div className='nav-center'>
                <div className='nav-container'>
                    <button className='toggle-btn' onClick={() => dispatch(toggleNavigation())}>
                        <BiMenu />
                    </button>
                    <div className='content-divider-vertical'></div>
                    <h4 className='nav-title'>Dashboard</h4>
                </div>
                <div className='nav-button-container'>
                    <DarkModeToggle />
                    <UserButton />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
