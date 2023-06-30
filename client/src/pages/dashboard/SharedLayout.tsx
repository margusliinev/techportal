import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { DesktopSidebar, MobileSidebar, Navbar } from '../../components';
import { getUser } from '../../features/user/userSlice';
import { useAppDispatch } from '../../hooks';
import Wrapper from '../../styles/styled_components/pages/dashboard/SharedLayout';

const SharedLayout = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUser())
            .then(() => {
                return;
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch]);

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
