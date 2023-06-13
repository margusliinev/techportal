import styled from 'styled-components';
import { StatsContainer, ChartsContainer } from '../../components';

const Stats = () => {
    return (
        <Wrapper>
            <StatsContainer />
            <ChartsContainer />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    row-gap: 2rem;
    padding: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
    @media (min-width: 1120px) {
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
    }
`;

export default Stats;
