import { ImProfile } from 'react-icons/im';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { TbViewfinder } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { toggleNavigation } from '../features/navigation/navigationSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/NavLinks';

const NavLinks = () => {
    const { user } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();

    const controlSidebar = () => {
        if (window.innerWidth < 1024) {
            dispatch(toggleNavigation());
        }
    };

    return (
        <Wrapper>
            <li>
                <Link to={'/stats'} className='nav-link' onClick={controlSidebar}>
                    {<IoBarChart />} stats
                </Link>
            </li>
            <li>
                <Link to={'/jobs'} className='nav-link' onClick={controlSidebar}>
                    {<MdQueryStats />} jobs
                </Link>
            </li>
            {user ? (
                <li>
                    <Link to={'/find'} className='nav-link' onClick={controlSidebar}>
                        {<TbViewfinder />} Find Job
                    </Link>
                </li>
            ) : null}
            <li>
                <Link to={'/profile'} className='nav-link' onClick={controlSidebar}>
                    {<ImProfile />} profile
                </Link>
            </li>
        </Wrapper>
    );
};

export default NavLinks;
