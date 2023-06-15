import styled from 'styled-components';

const Wrapper = styled.div`
    .delete-account {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .delete-account-header {
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
    .delete-account-header {
        p {
            max-width: 400px;
        }
    }
    .delete-account-form {
        .btn {
            background-color: var(--colorRed3);
            justify-self: start;
        }
        .btn:hover {
            background-color: var(--colorRed4);
        }
    }
`;

export default Wrapper;
