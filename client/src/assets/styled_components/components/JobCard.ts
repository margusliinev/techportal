import styled from 'styled-components';

const Wrapper = styled.article`
    background: var(--colorBackgroundSecondary);
    border-radius: var(--radius-md);
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: var(--shadow-md);
    header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--colorGray1);
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        text-align: center;
        row-gap: 1rem;
        column-gap: 0.25rem;
        align-items: center;
        .main-icon {
            width: 60px;
            height: 60px;
            display: grid;
            place-items: center;
            background: var(--colorPrimary5);
            border-radius: var(--radius-md);
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--colorWhite);
            justify-self: center;
        }
        .btn {
            background-color: var(--colorGreen1);
            color: var(--colorBackgroundPrimary);
            font-weight: 600;
            font-family: 'Poppins';
            transition: var(--transition);
        }
        .btn:hover {
            background-color: #4ade80;
        }
    }
    @media (min-width: 400px) {
        header {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr auto;
            row-gap: 1.5rem;
            text-align: left;
            .main-icon {
                margin-right: 1.5rem;
                justify-self: unset;
            }
        }
    }
    @media (min-width: 640px) {
        header {
            grid-template-columns: auto 1fr auto;
            grid-template-rows: 1fr;
            row-gap: 0;
        }
    }
    @media (min-width: 1280px) {
        header {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr auto;
            row-gap: 1.5rem;
        }
    }
    @media (min-width: 1536px) {
        header {
            grid-template-columns: auto 1fr auto;
            grid-template-rows: 1fr;
            row-gap: 0;
        }
    }
    .info {
        h5 {
            margin-bottom: 0.25rem;
        }
        p {
            margin: 0;
            text-transform: capitalize;
            color: var(--colorFontSecondary);
        }
    }
    .content {
        padding: 1rem 1.5rem;
    }
    .content-center {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.5rem;
        @media (min-width: 400px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .job-info {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        .icon {
            font-size: 1.1rem;
            margin-right: 1rem;
            display: flex;
            align-items: center;
            svg {
                color: var(--colorPrimary3);
            }
        }
        .text {
            text-transform: capitalize;
        }
    }
    .technologies {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
    }
    .technology {
        padding: 0.125rem;
        border-radius: var(--radius-sm);
        font-size: 14px;
    }
    .tech-stack {
        margin-top: 1rem;
        text-transform: capitalize;
    }
`;

export default Wrapper;
