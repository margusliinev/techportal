import styled from 'styled-components';

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
        position: absolute;
        background: var(--colorPrimary5);
        min-height: 100vh;
        height: 100%;
        width: 300px;
        transition: var(--transition);
        padding: 0rem 1rem;
        z-index: 999;
        box-shadow: var(--shadow-2xl);
    }
    .close-btn {
        position: absolute;
        right: -2.75rem;
        top: 1.75rem;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--colorGray1);
        cursor: pointer;
        transition: var(--transition);
        opacity: 0;
        transform: translateX(-100%);
    }
    .show-close-btn {
        opacity: 1;
        transform: translateX(0);
    }
    header {
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        h4 {
            display: inline-block;
            color: var(--colorPrimary5);
            background-color: var(--colorWhite);
            padding: 0.2rem 0.5rem;
            font-weight: 600;
            border-radius: var(--radius-md);
            font-family: 'Poppins';
            margin-right: 0.5rem;
        }
        h5 {
            display: inline-block;
            color: var(--colorWhite);
        }
    }
    .sidebar-links {
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
    }
    .sidebar-link {
        display: flex;
        align-items: center;
        color: var(--colorWhite);
        padding: 1rem 0;
        padding-left: 2.5rem;
        text-transform: capitalize;
        transition: var(--transition);
        gap: 0.5rem;
        border-radius: var(--radius-md);
        svg {
            font-size: 1.5rem;
        }
    }
    .sidebar-link:hover {
        background: var(--colorPrimary6);
        padding-left: 3rem;
    }

    .hide-content {
        margin-left: -300px;
    }
    .show-content {
        margin-left: 0;
    }
    .hide-sidebar {
        opacity: 0;
        z-index: -998;
    }
    .show-sidebar {
        opacity: 1;
        z-index: 998;
    }
`;
export default Wrapper;
