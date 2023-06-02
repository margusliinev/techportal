import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/Wrappers/SharedLayout';
import { Navbar, MainSidebar, MobileSidebar } from '../../components';

const SharedLayout = () => {
    return (
        <Wrapper>
            <main className='dashboard'>
                <MobileSidebar />
                <MainSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};

export default SharedLayout;
