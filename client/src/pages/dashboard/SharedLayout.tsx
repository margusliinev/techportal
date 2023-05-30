import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/Wrappers/SharedLayout';

const SharedLayout = () => {
    return (
        <Wrapper>
            <nav>
                <Link to={'/stats'}>Stats</Link>
                <Link to={'/jobs'}>Jobs</Link>
                <Link to={'/profile'}>Profile</Link>
            </nav>
            <Outlet />
        </Wrapper>
    );
};

export default SharedLayout;
