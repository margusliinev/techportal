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
        h4 {
            font-size: 2.25rem;
            padding: 0.5rem;
        }
        h5 {
            font-size: 1.75rem;
        }
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
        text-transform: capitalize;
    }
    .return-btn {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--colorPrimary5);
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
    .form-input-password-container {
        position: relative;
    }
    .password-toggle {
        position: absolute;
        right: 0.5rem;
        top: 0.45rem;
        display: grid;
        font-size: 1.4rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--colorGray4);
        transition: var(--transition);
    }
    .password-toggle:hover {
        color: var(--colorGray5);
    }
    .server-message {
        margin: 0.5rem 0;
        text-align: center;
        font-weight: 400;
        letter-spacing: -0.01rem;
    }
    .server-message-error {
        color: var(--colorRed1);
    }
    .server-message-success {
        color: var(--colorGreen1);
    }
`;

export default Wrapper;
