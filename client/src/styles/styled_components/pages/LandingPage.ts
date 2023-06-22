import styled from 'styled-components';

const Wrapper = styled.div`
    nav {
        display: flex;
        align-items: center;
        height: 6rem;
        width: 90vw;
        margin: 0 auto;
        max-width: var(--width-lg);
        h4 {
            font-size: 2.25rem;
            padding: 0.5rem;
        }
        h5 {
            font-size: 1.75rem;
        }
    }
    .container {
        min-height: calc(100vh - 6rem);
        display: grid;
        place-items: center;
        .landing-info,
        .landing-img {
            margin-bottom: 6rem;
        }
    }
    h1 {
        margin-bottom: 1rem;
        line-height: 1.25;
        span {
            color: var(--colorPrimary5);
            display: block;
        }
    }
    p {
        color: var(--colorFontSecondary);
        line-height: 1.75;
        margin-bottom: 0.5rem;
        max-width: 900px;
        font-size: 18px;
    }
    .btn-container {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    .explore-btn {
        background-color: var(--colorGray6);
    }
    .explore-btn:hover {
        background-color: var(--colorGray7);
    }
    .btn {
        font-size: 18px;
        white-space: nowrap;
        color: #f3f4f6;
    }
    .landing-img {
        display: none;
        height: unset;
    }
    @media (max-width: 360px) {
        .btn-container {
            flex-wrap: wrap;
        }
    }
    @media (max-width: 410px) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 16px;
        }
        .btn {
            font-size: 16px;
        }
    }
    @media (min-width: 1024px) {
        .container {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .landing-img {
            display: block;
        }
    }
`;

export default Wrapper;
