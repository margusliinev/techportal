import Wrapper from '../assets/Wrappers/MainSidebar';
import { LogoSmall } from '../components';
import { Link } from 'react-router-dom';
import { useNavigationStore } from '../store';

const MainSidebar = () => {
    const { showSidebar, toggleSidebar } = useNavigationStore();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
                <div className='content'>
                    <header>
                        <LogoSmall />
                    </header>
                    <ul className='nav-links'>
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
export default MainSidebar;
