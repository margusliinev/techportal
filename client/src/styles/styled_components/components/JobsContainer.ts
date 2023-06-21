import styled from 'styled-components';

const Wrapper = styled.section`
    margin-top: 3rem;
    h2 {
        text-transform: none;
    }
    & > h5 {
        height: 4rem;
        font-weight: 700;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .jobs {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
    .mini-loader {
        .loading {
            width: 40px;
            height: 40px;
        }
        .loading div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 32px;
            height: 32px;
            margin: 8px;
            border: 4px solid var(--colorPrimary5);
            border-radius: 50%;
            border-color: var(--colorPrimary5) transparent transparent transparent;
        }
    }
    @media (min-width: 1280px) {
        .jobs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }
`;

export default Wrapper;
