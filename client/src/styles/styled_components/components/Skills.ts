import styled from 'styled-components';

const Wrapper = styled.div`
    .skills {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 500px;
    }
    .skills-header {
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
    .skills-form {
        .skills-input-container {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .btn {
            padding: 0.5rem 0.75rem;
            color: #f3f4f6;
        }
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
`;

export default Wrapper;
