import { JobCard, Loader } from '../components';
import { useGetJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/JobsContainer';
import { Job } from '../types';

const JobsContainer = () => {
    const { search, employment, location, sort } = useAppSelector((store) => store.search);
    const { data, isLoading, isError, isFetching } = useGetJobsQuery({
        search: search,
        employment: employment,
        location: location,
        sort: sort,
    });

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
                {isFetching && (
                    <div className='mini-loader'>
                        <Loader />
                    </div>
                )}
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
