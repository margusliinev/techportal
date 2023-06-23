import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: fit-content;
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
        margin: 3rem 0;
    }
    .profile-center {
        display: grid;
        place-items: center;
        height: calc(100vh - 13rem);
    }
    .logged-out {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
        .btn {
            font-size: 22px;
            color: #f3f4f6;
        }
    }
`;

export default Wrapper;
