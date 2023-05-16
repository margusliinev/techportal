import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrapper>
            <h3>TP</h3>
            <h4>TechPortal</h4>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    width: 245px;
    h3 {
        display: inline-block;
        color: var(--colorWhite);
        background-color: #3b82f6;
        padding: 0.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        font-size: 2.5rem;
        margin-right: 1rem;
    }
    h4 {
        display: inline-block;
        color: var(--colorWhite);
    }
`;

export default Logo;
