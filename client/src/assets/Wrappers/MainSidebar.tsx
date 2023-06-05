import styled from 'styled-components';

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;
        .sidebar-container {
            background: var(--colorPrimary5);
            min-height: 100vh;
            height: 100%;
            width: 300px;
            margin-left: 0;
            transition: var(--transition);
            padding: 0rem 1rem;
        }
        .content {
            position: sticky;
            top: 0;
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
        .nav-links {
            padding-top: 5rem;
            display: flex;
            flex-direction: column;
        }
        .nav-link {
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
        .nav-link:hover {
            background: var(--colorPrimary6);
            padding-left: 3rem;
        }
        .nav-link:hover .icon {
            color: var(--colorPrimary5);
        }
        .active {
            color: var(--colorGray9);
        }
        .active .icon {
            color: var(--colorPrimary5);
        }
    }
`;
export default Wrapper;
