import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    min-height: calc(100vh - 9rem);
    padding: 2rem 2.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    background-color: var(--colorBackgroundSecondary);
    @media screen and (max-width: 400px) {
        padding: 2rem 1.5rem;
    }
    .content-divider {
        height: 0.1px;
        width: 100%;
        background-color: var(--colorGray5);
        margin: 2rem 0;
    }
    .find-job-title {
        font-weight: 600;
    }
    .skills-center {
        display: grid;
        place-items: center;
        height: calc(100vh - 13rem);
    }
`;

export default Wrapper;
