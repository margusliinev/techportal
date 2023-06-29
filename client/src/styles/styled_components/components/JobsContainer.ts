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
    .legend {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .legend-icon {
            display: grid;
            color: #fb923c;
            font-size: 1.25rem;
        }
        span:nth-of-type(2) {
            font-weight: 500;
        }
        p {
            font-size: 1rem;
            font-weight: 500;
        }
    }
    @media (max-width: 400px) {
        .legend {
            justify-content: start;
            p {
                white-space: nowrap;
                width: 115px;
                overflow-x: hidden;
            }
        }
    }
    @media (max-width: 640px) {
        h5 {
            display: grid;
            margin-bottom: 1rem;
        }
        .legend {
            flex-direction: row-reverse;
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
