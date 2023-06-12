import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { Loader, JobCard } from '../components';
import { getJobs } from '../utils/dataFetching';

const JobsContainer = () => {
    const { data, isLoading, isError } = useQuery(['jobs'], getJobs);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Wrapper>
                <p>Failed Fetching Jobs</p>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                {data.data.totalJobs} job{data.data.totalJobs > 1 && 's'}
            </h5>
            <div className='jobs'>
                {data.data.jobs.map((job) => {
                    return <JobCard key={job.id} {...job} />;
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: 4rem;
    h2 {
        text-transform: none;
    }
    & > h5 {
        font-weight: 700;
    }
    .jobs {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
    @media (min-width: 992px) {
        .jobs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }
`;

export default JobsContainer;
