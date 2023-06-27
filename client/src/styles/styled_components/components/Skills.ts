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
        .skills-search-container {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .btn {
            padding: 0.5rem 0.75rem;
            color: #f3f4f6;
        }
    }
    .skills-input-dropdown {
        visibility: hidden;
        background-color: var(--colorBackgroundSecondary);
        color: var(--colorBackgroundFont);
        flex-direction: column;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius-md);
        margin-top: 0.5rem;
    }
    .show-dropdown {
        visibility: visible;
    }
    .dropdown-item {
        padding: 0.125rem 0.5rem;
        cursor: pointer;
    }
    .dropdown-item:hover {
        background-color: var(--colorBackgroundPrimary);
    }
    .form-btn-disabled {
        background-color: var(--colorPrimary4);
    }
`;

export default Wrapper;
