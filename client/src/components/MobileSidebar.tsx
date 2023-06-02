import Wrapper from '../assets/Wrappers/MobileSidebar';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useNavigationStore } from '../store';

const MobileSidebar = () => {
    const { showSidebar, toggleSidebar } = useNavigationStore();

    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <ul className='sidebar-links'>
                        <li>
                            <Link to={'/stats'} className='nav-link'>
                                stats
                            </Link>
                        </li>
                        <li>
                            <Link to={'/jobs'} className='nav-link'>
                                jobs
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile'} className='nav-link'>
                                profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};
export default MobileSidebar;
