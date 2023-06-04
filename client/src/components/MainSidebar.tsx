import Wrapper from '../assets/Wrappers/MainSidebar';
import { LogoSmall } from '../components';
import { Link } from 'react-router-dom';
import { useNavigationStore } from '../store';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const MainSidebar = () => {
    const { showSidebar } = useNavigationStore();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
                <div className='content'>
                    <header>
                        <LogoSmall />
                    </header>
                    <ul className='nav-links'>
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

export default MainSidebar;
