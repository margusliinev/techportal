import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrapper>
            <h4>TP</h4>
            <h5>TechPortal</h5>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
        display: inline-block;
        color: var(--colorPrimary5);
        background-color: var(--colorWhite);
        padding: 0.2rem 0.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        margin-right: 0.5rem;
    }
    h5 {
        display: inline-block;
        color: var(--colorWhite);
    }
`;

export default Logo;
