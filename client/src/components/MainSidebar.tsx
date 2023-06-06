import styled from 'styled-components';
import { LogoLight, NavLinks } from '../components';

const MainSidebar = () => {
    return (
        <Wrapper>
            <div className='sidebar-container'>
                <div className='content'>
                    <LogoLight />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;
        .sidebar-container {
            background: var(--colorPrimary5);
            min-height: 100vh;
            height: 100%;
            width: 300px;
            margin-left: 0;
            padding: 0rem 1rem;
        }
        .content {
            position: sticky;
            top: 0;
        }
    }
`;

export default MainSidebar;
