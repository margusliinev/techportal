import styled from 'styled-components';

const Wrapper = styled.div`
    .personal-information {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .personal-information-header {
        margin-bottom: 1.5rem;
        h6 {
            color: var(--colorFontPrimary);
            margin-bottom: 0.25rem;
        }
        p {
            color: var(--colorFontSecondary);
            font-size: 15px;
        }
    }
    .personal-information-form {
        .btn {
            padding: 0.5rem 0.75rem;
            margin-top: 1rem;
            color: #f3f4f6;
        }
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
`;

export default Wrapper;
