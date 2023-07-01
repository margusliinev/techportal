import styled from 'styled-components';

const Wrapper = styled.div`
    nav {
        top: 0;
        height: 5rem;
        box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
        background-color: var(--colorBackgroundSecondary);
        z-index: 100;
        .nav-center {
            max-width: var(--width-lg);
            width: 90vw;
            margin: 0 auto;
        }
        .nav-container {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
    main {
        max-width: var(--width-lg);
        width: 90vw;
        margin: 0 auto;
        h3 {
            margin-top: 4rem;
        }
        .back-to-login-btn {
            font-size: 1.25rem;
            padding: 1rem 2rem;
            margin-top: 2rem;
            color: #f3f4f6;
        }
    }
    @media (max-width: 640px) {
        main {
            h3 {
                font-size: 1.875rem;
            }
            .back-to-login-btn {
                padding: 0.75rem 1.5rem;
            }
        }
    }
`;

export default Wrapper;
