import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    min-height: calc(100vh - 34rem);
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    h5 {
        font-weight: 500;
        z-index: 0;
    }
    .recommended-center {
        display: grid;
        place-items: center;
        position: absolute;
        height: 100%;
        width: 100%;

        .loader-center {
            position: absolute;
        }
    }
    @media (min-width: 1280px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;
export default Wrapper;
