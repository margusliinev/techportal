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
    .form-logo {
        display: grid;
        place-items: center;
        margin-bottom: 1.5rem;
    }
    .form-btn {
        margin-top: 1.5rem;
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
    .member-check {
        margin-top: 1rem;
        text-align: center;
        p {
            display: inline;
        }
        p:nth-of-type(1) {
            margin-right: 0.5rem;
        }
    }
    .member-btn {
        background: transparent;
        border: none;
        color: var(--colorPrimary5);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
    }
    .return-btn {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--colorPrimary5);
    }
    .reset-title {
        color: var(--colorGray7);
        margin-bottom: 1rem;
    }
    .reset-description {
        font-size: 0.875rem;
        color: var(--colorGray7);
        margin-bottom: 1.5rem;
    }
    .form-input-password-container {
        position: relative;
    }
    .password-toggle {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        display: grid;
        font-size: 1.4rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--colorGray4);
        transition: var(--transition);
    }
    .password-toggle:hover {
        color: var(--colorGray6);
    }
    .server-message-error {
        color: var(--colorRed2);
        margin: 0.5rem 0;
    }
    .server-message-success {
        color: var(--colorGreen2);
        margin: 0.5rem 0;
    }
`;

export default Wrapper;
