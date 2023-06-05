import Wrapper from '../assets/Wrappers/MainSidebar';
import { Link } from 'react-router-dom';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const MainSidebar = () => {
    return (
        <Wrapper>
            <div className='sidebar-container'>
                <div className='content'>
                    <header>
                        <h4>TP</h4>
                        <h5>TechPortal</h5>
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
