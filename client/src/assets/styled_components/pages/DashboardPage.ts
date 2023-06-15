import styled from 'styled-components';

const Wrapper = styled.div`
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
    }
    .dashboard-page {
        margin: 0 auto;
        padding: 2rem 0;
        min-height: calc(100vh - 5rem);
        width: 90%;
    }
    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: auto 1fr;
        }
    }
`;

export default Wrapper;
