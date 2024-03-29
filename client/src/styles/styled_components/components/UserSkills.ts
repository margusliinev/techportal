import styled from 'styled-components';

const Wrapper = styled.div`
    .skills-container {
        display: grid;
        align-items: center;
        gap: 2rem;
    }
    .skills-form-column {
        display: grid;
        max-width: 500px;
    }
    .skills-list-column {
        max-width: 500px;
    }
    .skills-header {
        margin-bottom: 1rem;
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
            display: grid;
            row-gap: 1rem;
        }
        .btn {
            padding: 0.5rem 0.75rem;
            color: #f3f4f6;
        }
    }
    .skills-input-container {
        position: relative;
    }
    .skills-input-dropdown {
        position: absolute;
        width: 100%;
        visibility: hidden;
        background-color: var(--colorBackgroundSecondary);
        color: var(--colorBackgroundFont);
        flex-direction: column;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius-md);
        margin-top: 0.5rem;
        z-index: 1;
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
    @media (min-width: 500px) {
        .skills-form {
            .skills-search-container {
                display: flex;
                gap: 1rem;
            }
        }
    }
    @media (min-width: 1280px) {
        .skills-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 5rem;
            max-width: 1200px;
        }
        .skills-form-column {
            display: grid;
            max-width: 500px;
        }
        .skills-list-column {
            max-width: 500px;
        }
    }
`;

export default Wrapper;
