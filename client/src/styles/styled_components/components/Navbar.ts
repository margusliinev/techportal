import styled from 'styled-components';

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    background-color: var(--colorBackgroundSecondary);
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90vw;
    }
    .nav-container {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .toggle-btn {
            background: transparent;
            border-color: transparent;
            font-size: 1.8rem;
            color: var(--colorPrimary5);
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: var(--transition);
        }
        .toggle-btn:hover {
            color: var(--colorPrimary6);
        }
        .content-divider-vertical {
            width: 0.11rem;
            height: 25px;
            background-color: var(--colorPrimary3);
        }
        .nav-title {
            font-size: 1.75rem;
        }
    }
    @media (max-width: 450px) {
        .nav-center {
            display: initial;
            .btn-container,
            .sign-in-btn {
                display: none;
            }
        }
        .nav-container {
            justify-content: space-between;
            flex-direction: row-reverse;
        }
        .content-divider-vertical {
            display: none;
        }
    }
    @media (min-width: 1024px) {
        .nav-center {
            width: 90%;
        }
        .nav-container {
            .toggle-btn {
                display: none;
            }
        }
        .content-divider-vertical {
            position: absolute;
            left: 0;
        }
    }
`;

export default Wrapper;
