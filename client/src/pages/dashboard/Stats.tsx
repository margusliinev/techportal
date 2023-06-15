// import { StatsContainer, ChartsContainer, Loader } from '../../components';
// import { getStats } from '../../utils/dataFetching';
// import { useQuery } from '@tanstack/react-query';
import Wrapper from '../../assets/styled_components/pages/dashboard/Stats';

const Stats = () => {
    // const { data, isLoading, isError } = useQuery(['stats'], getStats);

    // if (isLoading) {
    //     return (
    //         <Wrapper>
    //             <div className='stats-center'>
    //                 <Loader />
    //             </div>
    //         </Wrapper>
    //     );
    // }

    // if (isError) {
    //     return (
    //         <Wrapper>
    //             <div className='stats-center'>
    //                 <h3>Oops! Internal Server Error</h3>
    //                 <p>Service is currently down, please try again later</p>
    //             </div>
    //         </Wrapper>
    //     );
    // }

    return (
        <>
            {/* <StatsContainer topTechnologies={data.data.topTechnologies} />
            <ChartsContainer topTechnologies={data.data.topTechnologies} /> */}
            <div>Stats Page</div>
        </>
    );
};

export default Stats;
