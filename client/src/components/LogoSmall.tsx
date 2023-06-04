import styled from 'styled-components';

const LogoSmall = () => {
    return (
        <Wrapper>
            <h4>TP</h4>
            <h5>TechPortal</h5>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    h4 {
        display: inline-block;
        color: var(--colorWhite);
        background-color: #3b82f6;
        padding: 0.25rem 0.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
    h5 {
        font-size: 1.5rem;
        display: inline-block;
        color: var(--colorGray9);
    }
`;

export default LogoSmall;
