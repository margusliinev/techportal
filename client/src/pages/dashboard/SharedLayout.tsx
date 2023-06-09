import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navbar, MainSidebar, MobileSidebar } from '../../components';
import { useUserStore } from '../../store';
import { getUser } from '../../utils/dataFetching';
import { useEffect } from 'react';

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
        background-color: var(--colorWhite);
    }
    .dashboard-page {
        margin: 0 auto;
        padding: 2rem 0;
        height: calc(100vh - 5rem);
    }
    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: auto 1fr;
        }
        .dashboard-page {
            height: 90%;
        }
    }
`;

export default SharedLayout;
