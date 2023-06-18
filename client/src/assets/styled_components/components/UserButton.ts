import styled from 'styled-components';

const Wrapper = styled.div`
    .btn-container {
        position: relative;
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border-radius: var(--radius-2xl);
            span {
                display: grid;
                font-size: 1.25rem;
            }
            p {
                font-weight: 500;
                font-size: 16px;
                align-self: end;
            }
        }
        .dropdown {
            position: absolute;
            top: 40px;
            right: 0;
            width: 8rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            visibility: hidden;
            border-radius: var(--radius-md);
            color: var(--colorFontPrimary);
            border: 1px solid var(--colorBackgroundPrimary);
            background-color: var(--colorBackgroundSecondary);
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
            color: var(--colorFontPrimary);
        }
        .dropdown-btn:nth-of-type(1) {
            padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        }
        .dropdown-btn:nth-of-type(2) {
            padding: 0.25rem 0.5rem 0.5rem 0.5rem;
        }
        .dropdown-btn:hover {
            background-color: var(--colorBackgroundPrimary);
        }
    }
    .sign-in-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border-radius: var(--radius-2xl);
        span {
            display: grid;
            font-size: 1.25rem;
        }
        p {
            align-self: end;
        }
    }
`;

export default Wrapper;
