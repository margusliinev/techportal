import styled from 'styled-components';

const Wrapper = styled.section`
    height: 6rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1px;
    .btn-container {
        display: flex;
        gap: 1px;
    }
    .pageBtn {
        border-color: transparent;
        width: 50px;
        height: 40px;
        font-weight: 500;
        font-size: 18px;
        color: var(--fontColorPrimary);
        background-color: var(--colorSwitchPageButton);
        cursor: pointer;
    }
    .active {
        background: var(--colorPrimary5);
        color: var(--colorWhite);
    }
    .prev-btn,
    .next-btn {
        width: 50px;
        height: 40px;
        background: var(--colorSwitchPageButton);
        border-color: transparent;
        color: #f3f4f6;
        text-transform: capitalize;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        cursor: pointer;
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
        transition: var(--transition);
        background: var(--colorSwitchPageHover);
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
