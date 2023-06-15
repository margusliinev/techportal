import { BiMenu } from 'react-icons/bi';
import { UserButton } from '../components';
import { useAppDispatch } from '../hooks';
import { toggleNavigation } from '../features/navigation/navigationSlice';
import Wrapper from '../assets/styled_components/Navbar';

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
                <UserButton />
            </div>
        </Wrapper>
    );
};

export default Navbar;
