import styled from 'styled-components';

const Wrapper = styled.section`
    .form {
        width: 100%;
        max-width: 100%;
    }
    .form-title {
        text-transform: capitalize;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    .form-row {
        margin-bottom: 0;
    }
    .form-center {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 2rem;
        row-gap: 1rem;
        align-items: center;
    }
    .btn-find {
        background-color: var(--colorFindJobsButton);
        border: 1px solid var(--colorFindJobsButton);
        color: #3f3f3f;
        font-weight: 600;
        align-self: end;
    }
    .btn-find:hover {
        background-color: var(--colorFindJobsHover);
        border: 1px solid var(--colorFindJobsHover);
    }
    .btn-clear {
        background-color: var(--colorClearFiltersButton);
        border: 1px solid var(--colorClearFiltersButton);
        color: #3f3f3f;
        font-weight: 600;
        align-self: end;
    }
    .btn-clear:hover {
        background-color: var(--colorClearFiltersHover);
        border: 1px solid var(--colorClearFiltersHover);
    }
    @media (min-width: 768px) {
        .form-center {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1280px) {
        .form-center {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default Wrapper;
