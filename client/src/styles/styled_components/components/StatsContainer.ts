import styled from 'styled-components';

const Wrapper = styled.div`
    .stats {
        display: grid;
        row-gap: 2rem;
        padding: 2rem 0;
    }
    @media (min-width: 768px) {
        .stats {
            grid-template-columns: 1fr 1fr;
            column-gap: 1rem;
        }
    }
    @media (min-width: 1536px) {
        .stats {
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 1rem;
        }
    }
    article {
        padding: 2rem;
        background: var(--colorBackgroundSecondary);
        border-radius: var(--radius-md);
        display: grid;
        row-gap: 0.5rem;
        box-shadow: var(--shadow-sm);
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-self: start;
        }
        .count {
            display: block;
            font-weight: 700;
            font-size: 50px;
        }
        .technology {
            font-size: 1.25rem;
            padding: 0.5rem;
            border-radius: var(--radius-md);
            color: var(--colorBackgroundSecondary);
            font-weight: 600;
            font-family: 'Poppins';
            text-transform: capitalize;
        }
        .title {
            margin: 0;
            text-transform: capitalize;
            letter-spacing: var(--letterSpacing);
            text-align: left;
            margin-top: 1rem;
            align-self: end;
            font-size: 22px;
        }
    }
    article:nth-of-type(1) {
        border-bottom: 5px solid var(--colorGreen);
        .technology {
            background-color: var(--colorGreen);
        }
        .title {
            span {
                color: var(--colorGreen);
            }
        }
    }
    article:nth-of-type(2) {
        border-bottom: 5px solid var(--colorYellow);
        .technology {
            background-color: var(--colorYellow);
        }
        .title {
            span {
                color: var(--colorYellow);
            }
        }
    }
    article:nth-of-type(3) {
        border-bottom: 5px solid var(--colorRed);
        .technology {
            background-color: var(--colorRed);
        }
        .title {
            span {
                color: var(--colorRed);
            }
        }
    }
`;

export default Wrapper;
