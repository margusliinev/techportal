import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { Loader, JobCard } from '../components';
import { getJobs } from '../utils/dataFetching';

const JobsContainer = () => {
    const { data, isLoading, isError } = useQuery(['jobs'], getJobs);

    if (isLoading) {
        return (
            <Wrapper>
                <div className='jobs-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <div className='jobs-center'>
                    <h3>Oops! Internal Server Error</h3>
                    <p>Service is currently down, please try again later</p>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                {data.data.totalJobs} job{data.data.totalJobs > 1 && 's'} found
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
        margin-bottom: 1rem;
        text-transform: capitalize;
    }
    .jobs {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
    @media (min-width: 1280px) {
        .jobs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }
    .jobs-center {
        display: grid;
        place-items: center;
        text-align: center;
        row-gap: 1rem;
        p {
            color: var(--colorFontSecondary);
        }
    }
`;

export default JobsContainer;
