import styled from 'styled-components';

const Wrapper = styled.section`
    margin-top: 3rem;
    h2 {
        text-transform: none;
    }
    & > h5 {
        font-weight: 700;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }
    .jobs {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
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
