import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    h5 {
        font-weight: 500;
    }
    @media (min-width: 1280px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;
export default Wrapper;
