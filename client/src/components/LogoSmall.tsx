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
    display: inline-flex;
    align-items: center;
    width: 245px;
    h4 {
        display: inline-block;
        color: var(--colorWhite);
        background-color: #3b82f6;
        padding: 0.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        font-family: 'Poppins';
        font-size: 2rem;
        margin-right: 0.75rem;
    }
    h5 {
        font-size: 1.75rem;
        display: inline-block;
        color: var(--colorGray9);
    }
`;

export default LogoSmall;
