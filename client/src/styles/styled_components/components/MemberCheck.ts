import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 1rem;
    text-align: center;
    p {
        display: inline;
    }
    p:nth-of-type(1) {
        margin-right: 0.5rem;
    }
    .member-btn {
        background: transparent;
        border: none;
        color: var(--colorPrimary);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export default Wrapper;
