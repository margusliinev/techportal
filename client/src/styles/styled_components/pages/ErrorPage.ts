import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        min-height: 100vh;
        display: grid;
        place-items: center;
        div {
            text-align: center;
        }
    }
    img {
        height: unset;
        max-width: 600px;
        display: block;
        margin: 0 auto 2rem auto;
        object-fit: contain;
    }
    h3 {
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    p {
        margin-top: 0;
        color: var(--colorFontSecondary);
        margin-bottom: 1rem;
    }
    .btn {
        font-size: 18px;
        color: #f3f4f6;
    }
`;

export default Wrapper;
