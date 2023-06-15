import styled from 'styled-components';

const Wrapper = styled.div`
    .change-password {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .change-password-header {
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
    .change-password-form {
        .btn {
            padding: 0.5rem 0.75rem;
            margin-top: 1rem;
        }
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
`;

export default Wrapper;
