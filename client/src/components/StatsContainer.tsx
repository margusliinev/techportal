import styled from 'styled-components';
import { getStats } from '../utils/dataFetching';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components';

const StatsContainer = () => {
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
        <Wrapper>
            {data.data.topTechnologies.slice(0, 3).map((technology) => {
                return (
                    <div>
                        <header>
                            <span className='count'>{technology.count}</span>
                            <span className='icon'>{technology.technology}</span>
                        </header>
                        <h5 className='title'>
                            {technology.technology} is used by {technology.count} companies
                        </h5>
                    </div>
                );
            })}
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

export default StatsContainer;
