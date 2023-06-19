import { ImProfile } from 'react-icons/im';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { toggleNavigation } from '../features/navigation/navigationSlice';
import { useAppDispatch } from '../hooks';
import Wrapper from '../styles/styled_components/components/NavLinks';

const NavLinks = () => {
    const dispatch = useAppDispatch();

    const controlSidebar = () => {
        if (window.innerWidth < 992) {
            dispatch(toggleNavigation());
        }
    };

    return (
        <Wrapper>
            <li>
                <Link to={'/dashboard/stats'} className='nav-link' onClick={controlSidebar}>
                    {<IoBarChart />} stats
                </Link>
            </li>
            <li>
                <Link to={'/dashboard/jobs'} className='nav-link' onClick={controlSidebar}>
                    {<MdQueryStats />} jobs
                </Link>
            </li>
            <li>
                <Link to={'/dashboard/profile'} className='nav-link' onClick={controlSidebar}>
                    {<ImProfile />} profile
                </Link>
            </li>
        </Wrapper>
    );
};

export default NavLinks;
