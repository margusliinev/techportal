import styled from 'styled-components';

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;
        box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
        .sidebar-container {
            background: var(--colorWhite);
            min-height: 100vh;
            height: 100%;
            width: 250px;
            margin-left: -250px;
            transition: var(--transition);
        }
        .content {
            position: sticky;
            top: 0;
        }
        .show-sidebar {
            margin-left: 0;
        }
        header {
            height: 6rem;
            display: flex;
            align-items: center;
            padding: 0 1rem;
        }
        .nav-links {
            padding-top: 4rem;
            display: flex;
            flex-direction: column;
        }
        .nav-link {
            display: flex;
            align-items: center;
            color: var(--colorGray5);
            padding: 1rem 0;
            padding-left: 2.5rem;
            text-transform: capitalize;
            transition: var(--transition);
            gap: 0.5rem;
            svg {
                font-size: 1.5rem;
            }
        }
        .nav-link:hover {
            background: var(--colorGray1);
            padding-left: 3rem;
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
    }
`;
export default Wrapper;
