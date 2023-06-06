import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navbar, MainSidebar, MobileSidebar, Loader } from '../../components';
import { useUserStore } from '../../store';
import { getCurrentUserData } from '../../utils/dataFetching';
import { useEffect } from 'react';

const SharedLayout = () => {
    const { setUser, setUserLoading } = useUserStore();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCurrentUserData();
            setUser(data.data.user);
            setUserLoading(false);
        };
        fetchData();
    }, []);

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

const Wrapper = styled.section`
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
    }
    .dashboard-page {
        width: 90vw;
        margin: 0 auto;
        padding: 2rem 0;
    }
    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: auto 1fr;
        }
        .dashboard-page {
            width: 90%;
        }
    }
`;

export default SharedLayout;
