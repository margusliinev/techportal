import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoBarChart } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const NavLinks = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    .nav-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--colorPrimary5);
        padding: 1rem 0rem 1rem 2rem;
        text-transform: capitalize;
        transition: var(--transition);
        border-radius: var(--radius-md);
        svg {
            font-size: 1.5rem;
        }
    }
    .nav-link:hover {
        background-color: var(--colorPrimary1);
        padding-left: 2.5rem;
    }
`;

export default NavLinks;
