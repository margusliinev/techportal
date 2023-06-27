import styled from 'styled-components';

const Wrapper = styled.form`
    .skills {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 0.5rem;
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
            border: none;
            font-size: 1.25rem;
            color: var(--colorRed);
            cursor: pointer;
        }
    }
`;

export default Wrapper;
