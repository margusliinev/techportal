import { ChartsContainer, Loader, StatsContainer } from '../../components';
import { useGetStatsQuery } from '../../features/api/apiSlice';
import Wrapper from '../../styles/styled_components/pages/dashboard/Stats';

const Stats = () => {
    const { data, isLoading } = useGetStatsQuery(undefined);

    if (isLoading) {
        return (
            <Wrapper>
                <div className='stats-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (!data) {
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
        <Wrapper>
            <StatsContainer topTechnologies={data.topTechnologies} />
            <ChartsContainer topTechnologies={data.topTechnologies} />
        </Wrapper>
    );
};

export default Stats;
