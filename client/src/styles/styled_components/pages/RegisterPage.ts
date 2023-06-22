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
        color: #f3f4f6;
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
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
        text-align: center;
    }
`;

export default Wrapper;
