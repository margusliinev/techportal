import styled from 'styled-components';

const Wrapper = styled.div`
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        background-color: #eff6ff;
    }
    .dashboard-page {
        margin: 0 auto;
        padding: 2rem 0;
        width: 90vw;
        height: 90vh;
    }
    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: auto 1fr;
        }
        .dashboard-page {
            width: 90%;
            height: 90%;
        }
    }
`;

export default Wrapper;
