import styled from 'styled-components';

const Wrapper = styled.ul`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    .nav-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--colorFontPrimary);
        padding: 1rem 0rem 1rem 2rem;
        text-transform: capitalize;
        transition: var(--transition);
        transition-property: padding-left, background-color;
        border-radius: var(--radius-md);
        svg {
            font-size: 1.5rem;
            color: var(--colorPrimary);
        }
    }
    .nav-link:hover {
        background-color: var(--colorLinkBackground);
        padding-left: 2.5rem;
    }
    @media (max-width: 450px) {
        .nav-link {
            padding-left: 1rem;
        }
        .nav-link:hover {
            padding-left: 1.5rem;
        }
    }
`;

export default Wrapper;
