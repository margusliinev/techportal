import styled from 'styled-components';

const Wrapper = styled.section`
    height: 6rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .btn-container {
        background: var(--colorBackgroundSecondary);
        display: flex;
        border-left: 1px solid var(--colorBackgroundPrimary);
    }
    .pageBtn {
        background: transparent;
        border-color: transparent;
        width: 50px;
        height: 40px;
        font-weight: 500;
        font-size: 18px;
        color: var(--fontColorPrimary);
        transition: var(--transition);
        cursor: pointer;
        border-right: 1px solid var(--colorBackgroundPrimary);
    }
    .active {
        border-right: 1px solid var(--colorPrimary5);
        border-left: 1px solid var(--colorPrimary5);
        background: var(--colorPrimary5);
        color: var(--colorWhite);
    }
    .prev-btn,
    .next-btn {
        width: 50px;
        height: 40px;
        background: #444;
        border-color: transparent;
        color: var(--colorPrimary4);
        text-transform: capitalize;
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: var(--transition);
        font-size: 1.5rem;
    }
    .next-btn {
        border-top-right-radius: var(--radius-md);
        border-bottom-right-radius: var(--radius-md);
    }
    .prev-btn {
        border-top-left-radius: var(--radius-md);
        border-bottom-left-radius: var(--radius-md);
    }
    .prev-btn:hover,
    .next-btn:hover {
        background: #4f4f4f;
    }
    @media screen and (max-width: 350px) {
        .prev-btn,
        .next-btn,
        .pageBtn {
            width: 45px;
        }
    }
`;
export default Wrapper;
