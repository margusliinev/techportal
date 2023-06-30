import styled from 'styled-components';

const Wrapper = styled.section`
    .job-center {
        display: grid;
        place-items: center;
        height: calc(100vh - 13rem);
    }
    .job-container {
        width: 100%;
        height: fit-content;
        padding: 2rem 2.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        background-color: var(--colorBackgroundSecondary);
        z-index: -5;
    }
    .job-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--colorGray3);
    }
    .job-company-logo {
        height: 80px;
        width: 80px;
        border-radius: var(--radius-md);
    }
    .job-position {
        margin-bottom: 0.25rem;
    }
    .job-company {
        font-weight: 600;
        color: var();
    }
    .job-deadline {
        justify-self: end;
        display: none;
        align-items: center;
        gap: 0.5rem;
        box-shadow: var(--shadow-sm);
        height: fit-content;
        padding: 1rem;
        background-color: var(--colorPrimary5);
        color: #f3f4f6;
        border-radius: var(--radius-md);
        white-space: nowrap;
        span {
            font-size: 1.25rem;
            svg {
                display: grid;
            }
        }
    }
    .job-post {
        white-space: pre-wrap;
        margin-top: 2rem;
        max-width: 1000px;
    }
    @media (max-width: 640px) {
        .job-header {
            display: grid;
        }
    }
    @media (min-width: 1200px) {
        .job-header {
            display: grid;
            grid-template-columns: auto auto 1fr;
            gap: 1.5rem;
        }
        .job-deadline {
            display: flex;
        }
    }
`;

export default Wrapper;
