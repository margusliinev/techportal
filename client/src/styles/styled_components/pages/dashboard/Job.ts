import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding: 2rem 2.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    background-color: var(--colorBackgroundSecondary);
    .job-center {
        display: grid;
        place-items: center;
    }
`;

export default Wrapper;
