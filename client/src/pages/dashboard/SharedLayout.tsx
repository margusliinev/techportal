import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getUser } from '../../features/user/userSlice';
import { Outlet } from 'react-router-dom';
import { Navbar, DesktopSidebar, MobileSidebar } from '../../components';
import Wrapper from '../../assets/styled_components/pages/dashboard/SharedLayout';

const SharedLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <Wrapper>
            <div className='dashboard'>
                <MobileSidebar />
                <DesktopSidebar />
                <div>
                    <Navbar />
                    <main className='dashboard-page'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </Wrapper>
    );
};

export default SharedLayout;
