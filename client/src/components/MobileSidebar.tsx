import Wrapper from '../assets/Wrappers/MobileSidebar';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useNavigationStore } from '../store';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

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
                            <Link to={'/dashboard/stats'} className='nav-link'>
                                {<IoBarChart />} stats
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/jobs'} className='nav-link'>
                                {<MdQueryStats />} jobs
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/profile'} className='nav-link'>
                                {<ImProfile />} profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};
export default MobileSidebar;
