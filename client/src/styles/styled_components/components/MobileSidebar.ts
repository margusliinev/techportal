import styled from 'styled-components';

const Wrapper = styled.aside`
    .sidebar-container {
        position: fixed;
        background: var(--colorBackgroundOverlay);
        inset: 0;
        transition: all 0.3s ease-in-out;
        z-index: 999;
    }
    .content {
        position: fixed;
        background-color: var(--colorBackgroundSecondary);
        width: 280px;
        height: 100vh;
        transition: var(--transition);
        transition-property: margin;
        padding: 0rem 1rem;
        z-index: 999;
        box-shadow: var(--shadow-2xl);
        display: flex;
        flex-direction: column;
    }
    .user-button {
        display: none;
        align-self: start;
        margin-top: 2rem;
        margin-left: 2rem;
    }
    .theme-button {
        display: none;
        margin-left: 1.75rem;
        margin-top: 0.5rem;
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
    @media (max-width: 450px) {
        .user-button {
            display: initial;
            margin-left: 1rem;
        }
        .theme-button {
            margin-left: 0.75rem;
        }
        .content {
            width: 250px;
        }
    }
    @media (max-width: 600px) {
        .theme-button {
            display: grid;
        }
    }
    @media (min-width: 1024px) {
        display: none;
    }
`;

export default Wrapper;
