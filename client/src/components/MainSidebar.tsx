import styled from 'styled-components';
import { LogoSmall, NavLinks } from '../components';

const MainSidebar = () => {
    return (
        <Wrapper>
            <div className='sidebar-container'>
                <div className='content'>
                    <LogoSmall />
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
            background-color: var(--colorWhite);
            min-height: 100vh;
            height: 100%;
            width: 280px;
            margin-left: 0;
            padding: 0rem 1rem;
            box-shadow: 1px 0 0px 0px rgba(0, 0, 0, 0.1);
        }
        .content {
            position: sticky;
            top: 0;
        }
    }
`;

export default MainSidebar;
