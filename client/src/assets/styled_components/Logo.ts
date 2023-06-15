import styled from 'styled-components';

const Wrapper = styled.header`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
        display: inline-block;
        background-color: var(--colorPrimary5);
        padding: 0.2rem 0.5rem;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        margin-right: 0.5rem;
    }
    h5 {
        display: inline-block;
    }
`;

export default Wrapper;
