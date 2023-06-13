import styled from 'styled-components';
import { StatsContainer, ChartsContainer, Loader } from '../../components';
import { getStats } from '../../utils/dataFetching';
import { useQuery } from '@tanstack/react-query';

const Stats = () => {
    const { data, isLoading, isError } = useQuery(['stats'], getStats);

    if (isLoading) {
        return (
            <Wrapper>
                <div className='stats-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <div className='stats-center'>
                    <h3>Oops! Internal Server Error</h3>
                    <p>Service is currently down, please try again later</p>
                </div>
            </Wrapper>
        );
    }

    return (
        <>
            <StatsContainer topTechnologies={data.data.topTechnologies} />
            <ChartsContainer topTechnologies={data.data.topTechnologies} />
        </>
    );
};

const Wrapper = styled.section`
    .stats-center {
        display: grid;
        place-items: center;
        text-align: center;
        row-gap: 1rem;
        p {
            color: var(--colorFontSecondary);
        }
    }
`;

export default Stats;
