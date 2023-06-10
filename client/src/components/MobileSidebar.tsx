import styled from 'styled-components';
import { useNavigationStore } from '../store';
import { LogoSmall, NavLinks } from '../components';
import { CgClose } from 'react-icons/cg';

const MobileSidebar = () => {
    const { showSidebar, toggleSidebar } = useNavigationStore();

    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container hide-sidebar'}></div>
            <div className={showSidebar ? 'content show-content' : 'content hide-content'}>
                <button type='button' className='close-btn' onClick={toggleSidebar}>
                    <CgClose />
                </button>
                <LogoSmall />
                <NavLinks />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    position: relative;
    @media (min-width: 992px) {
        display: none;
    }
    .sidebar-container {
        position: fixed;
        background: rgba(17, 24, 39, 0.75);
        inset: 0;
        transition: all 0.3s ease-in-out;
    }
    .content {
        position: fixed;
        background-color: var(--colorWhite);
        width: 280px;
        height: 100vh;
        transition: var(--transition);
        padding: 0rem 1rem;
        z-index: 999;
        box-shadow: var(--shadow-2xl);
    }
    .close-btn {
        position: absolute;
        right: -2.75rem;
        top: 1.7rem;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--colorGray1);
        cursor: pointer;
        transition: var(--transition);
        opacity: 1;
    }
    .hide-content {
        margin-left: -350px;
    }
    .show-content {
        margin-left: 0;
    }
    .hide-sidebar {
        opacity: 0;
        z-index: -1;
    }
    .show-sidebar {
        opacity: 1;
        z-index: 998;
    }
`;

export default MobileSidebar;
