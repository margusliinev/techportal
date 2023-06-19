import Wrapper from '../../assets/styled_components/pages/dashboard/Stats';
import { ChartsContainer, Loader,StatsContainer } from '../../components';
import { useGetStatsQuery } from '../../features/api/apiSlice';

const Stats = () => {
    const { data, isLoading, isError } = useGetStatsQuery(undefined);

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
        <Wrapper>
            <StatsContainer topTechnologies={data?.topTechnologies} />
            <ChartsContainer topTechnologies={data?.topTechnologies} />
            <div>Stats Page</div>
        </Wrapper>
    );
};

export default Stats;
