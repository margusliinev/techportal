import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrapper>
            <h3>TP</h3>
            <h4>TechPortal</h4>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: var(--width-xl);
    margin: 0 auto;
    width: 90vw;
    height: 6rem;
    h3 {
        color: var(--colorWhite);
        background-color: #3b82f6;
        padding: 0.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        font-size: 2.5rem;
    }
    h4 {
        color: var(--colorWhite);
    }
`;

export default Logo;
