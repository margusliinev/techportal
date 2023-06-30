import { Outlet } from 'react-router-dom';

import { DesktopSidebar, MobileSidebar, Navbar } from '../../components';
import Wrapper from '../../styles/styled_components/pages/dashboard/SharedLayout';

const SharedLayout = () => {
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
