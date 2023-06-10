import { Outlet } from 'react-router-dom';
import { Navbar, MainSidebar, MobileSidebar } from '../../components';
import { useUserStore } from '../../store';
import { getUser } from '../../utils/dataFetching';
import { useEffect } from 'react';
import Wrapper from '../../assets/Wrappers/DashboardPage';

const SharedLayout = () => {
    const { setUser, setUserLoading } = useUserStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser();
                setUser(data.data.user);
            } catch (error) {
                setUser(null);
            }
            setUserLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Wrapper>
            <div className='dashboard'>
                <MobileSidebar />
                <MainSidebar />
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
