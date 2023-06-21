import styled from 'styled-components';

const Wrapper = styled.section`
    .form {
        width: 100%;
        max-width: 100%;
    }
    .form-title {
        text-transform: capitalize;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    .form-row {
        margin-bottom: 0;
    }
    .form-center {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 2rem;
        row-gap: 1rem;
    }
    .btn-find {
        background-color: var(--colorPrimary3);
        color: var(--colorBackgroundSecondary);
        font-weight: 600;
    }
    .btn-find:hover {
        background-color: var(--colorPrimary4);
    }
    .btn-clear {
        background-color: var(--colorRed1);
        color: var(--colorBackgroundSecondary);
        font-weight: 600;
    }
    .btn-clear:hover {
        background-color: var(--colorRed2);
    }
    @media (min-width: 768px) {
        .form-center {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 992px) {
        .form-center {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default Wrapper;
