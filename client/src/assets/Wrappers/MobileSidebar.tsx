import styled from 'styled-components';

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }
    .sidebar-container {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        transition: var(--transition);
    }
    .show-sidebar {
        z-index: 99;
        opacity: 1;
    }
    .content {
        background: var(--colorWhite);
        width: 500px;
        height: 95vh;
        border-radius: var(--radius-md);
        padding: 4rem 2rem;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .close-btn {
        position: absolute;
        top: 10px;
        left: 10px;
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        color: var(--colorRed2);
        cursor: pointer;
    }
    .nav-links {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
    }
    .nav-link {
        display: flex;
        align-items: center;
        color: var(--colorGray5);
        padding: 1rem 0;
        text-transform: capitalize;
        transition: var(--transition);
    }
    .nav-link:hover {
        color: var(--colorGray9);
    }
    .nav-link:hover .icon {
        color: var(--colorPrimary5);
    }
    .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
        transition: var(--transition);
    }
    .active {
        color: var(--colorGray9);
    }
    .active .icon {
        color: var(--colorPrimary5);
    }
`;
export default Wrapper;
