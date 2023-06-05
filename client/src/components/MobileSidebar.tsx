import Wrapper from '../assets/Wrappers/MobileSidebar';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { useNavigationStore } from '../store';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const MobileSidebar = () => {
    const { showSidebar, toggleSidebar } = useNavigationStore();

    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container hide-sidebar'}></div>
            <div className={showSidebar ? 'content show-content' : 'content hide-content'}>
                <button type='button' className={showSidebar ? 'close-btn show-close-btn' : 'close-btn'} onClick={toggleSidebar}>
                    <CgClose />
                </button>
                <header>
                    <h4>TP</h4>
                    <h5>TechPortal</h5>
                </header>
                <ul className='sidebar-links'>
                    <li>
                        <Link to={'/dashboard/stats'} className='sidebar-link'>
                            {<IoBarChart />} stats
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/jobs'} className='sidebar-link'>
                            {<MdQueryStats />} jobs
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/profile'} className='sidebar-link'>
                            {<ImProfile />} profile
                        </Link>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
};
export default MobileSidebar;
