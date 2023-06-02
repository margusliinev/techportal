import styled from 'styled-components';

const Wrapper = styled.nav`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    .logo {
        display: flex;
        align-items: center;
        width: 100px;
    }
    .nav-center {
        display: flex;
        width: 90vw;
        align-items: center;
        justify-content: space-between;
    }
    .toggle-btn {
        background: transparent;
        border-color: transparent;
        font-size: 1.75rem;
        color: var(--colorPrimary5);
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    background: var(--colorWhite);
    .btn-container {
        position: relative;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 0.5rem;
        position: relative;
        box-shadow: var(--shadow-md);
    }

    .dropdown {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background: var(--colorPrimary1);
        box-shadow: var(--shadow-md);
        padding: 0.5rem;
        text-align: center;
        visibility: hidden;
        border-radius: var(--radius-md);
    }
    .show-dropdown {
        visibility: visible;
    }
    .dropdown-btn {
        background: transparent;
        border-color: transparent;
        color: var(--colorPrimary5);
        text-transform: capitalize;
        cursor: pointer;
    }
    .logo-text {
        display: none;
        margin: 0;
        text-transform: capitalize;
        font-weight: 600;
    }
    @media (min-width: 992px) {
        position: sticky;
        top: 0;

        .nav-center {
            width: 90%;
        }
        .logo {
            display: none;
        }
        .logo-text {
            display: block;
        }
    }
`;
export default Wrapper;
