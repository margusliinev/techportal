import styled from 'styled-components';

const Wrapper = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
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
            font-size: 1.75rem;
            color: var(--colorPrimary5);
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .content-divider-vertical {
            width: 1px;
            height: 25px;
            background-color: var(--colorGray2);
        }
        .nav-title {
            font-size: 1.75rem;
            color: var(--colorGray9);
        }
    }
    .btn-container {
        position: relative;
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0 0.5rem;
            position: relative;
            background: var(--colorPrimary5);
            span {
                display: grid;
                font-size: 1.25rem;
            }
            p {
                font-weight: 500;
                font-size: 16px;
            }
        }
        .dropdown {
            position: absolute;
            top: 40px;
            right: 0;
            width: 8rem;
            background-color: var(--colorWhite);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            visibility: hidden;
            border-radius: var(--radius-md);
            border: 1px solid var(--colorGray2);
        }
        .show-dropdown {
            visibility: visible;
        }
        .dropdown-btn {
            display: block;
            width: 100%;
            text-align: left;
            background: transparent;
            border-color: transparent;
            cursor: pointer;
            font-size: 14px;
        }
        .dropdown-btn:nth-of-type(1) {
            padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        }
        .dropdown-btn:nth-of-type(2) {
            padding: 0.25rem 0.5rem 0.5rem 0.5rem;
        }
        .dropdown-btn:hover {
            background-color: var(--colorGray1);
        }
    }
    .sign-in-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border-radius: var(--radius-2xl);
        span {
            display: grid;
            font-size: 1.25rem;
        }
    }
    @media (min-width: 992px) {
        position: sticky;
        top: 0;
        .nav-center {
            width: 90%;
        }
        .nav-container {
            .toggle-btn,
            .content-divider-vertical {
                display: none;
            }
        }
    }
`;
export default Wrapper;
