import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/styled_components/pages/dashboard/SharedLayout';
import { DesktopSidebar, MobileSidebar,Navbar } from '../../components';
import { getUser } from '../../features/user/userSlice';
import { useAppDispatch } from '../../hooks';

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
