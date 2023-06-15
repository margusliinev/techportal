import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { useAppDispatch } from '../hooks';
import { toggleNavigation } from '../features/navigation/navigationSlice';
import Wrapper from '../assets/styled_components/components/NavLinks';

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
