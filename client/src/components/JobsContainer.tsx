import { Loader, JobCard } from '../components';
import { useGetJobsQuery } from '../features/api/apiSlice';
import { Job } from '../types';
import Wrapper from '../assets/styled_components/components/JobsContainer';

const JobsContainer = () => {
    const { data, isLoading, isError } = useGetJobsQuery(undefined);

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
                {data?.totalJobs} job{data && data.totalJobs > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {data &&
                    data.jobs.map((job: Job) => {
                        return <JobCard key={job.id} {...job} />;
                    })}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
