import styled from 'styled-components';

const Wrapper = styled.section`
    height: calc(100vh - 10rem);
    width: 100%;
    .stats-center {
        width: 100%;
        height: 100%;
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
