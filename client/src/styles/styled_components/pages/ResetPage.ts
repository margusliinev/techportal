import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }
    .form {
        border-top: 5px solid var(--colorPrimary5);
        box-shadow: 0 0 20px 5px rgb(0 0 0 / 0.15);
    }
    .form-btn {
        margin-top: 1.5rem;
        color: #f3f4f6;
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
    .return-btn {
        display: block;
        margin-top: 1rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--colorPrimary);
    }
    .reset-title {
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .reset-description {
        font-size: 0.875rem;
        color: var(--colorFontSecondary);
        margin-bottom: 1.5rem;
    }
    .server-message {
        text-align: center;
    }
`;

export default Wrapper;
