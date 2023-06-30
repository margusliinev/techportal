import styled from 'styled-components';

const Wrapper = styled.section`
    min-height: calc(100vh - 10rem);
    width: 100%;
    .stats-center {
        width: 100%;
        min-height: calc(100vh - 10rem);
        display: grid;
        place-items: center;
        text-align: center;
        row-gap: 1rem;
        p {
            color: var(--colorFontSecondary);
        }
    }
`;

export default Wrapper;
