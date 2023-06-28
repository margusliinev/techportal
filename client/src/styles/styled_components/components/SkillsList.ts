import styled from 'styled-components';

const Wrapper = styled.form`
    .skills {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        border: 1px solid var(--colorGray3);
        border-radius: 1rem;
        padding: 2rem;
    }
    .skill {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem;
        border: 1px solid var(--colorGray3);
        width: fit-content;
        border-radius: var(--radius-md);
        button {
            display: grid;
            background-color: transparent;
            border: 2px solid transparent;
            font-size: 1.5rem;
            color: var(--colorRed);
            cursor: pointer;
            transition: var(--transition);
            border-radius: var(--radius-md);
        }
        button:hover {
            border: 2px solid var(--colorRed);
        }
    }
    @media (max-width: 450px) {
        .skills {
            padding: 1rem;
        }
    }
`;

export default Wrapper;
