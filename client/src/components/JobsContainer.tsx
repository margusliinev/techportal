import { JobCard, Loader, PaginationContainer } from '../components';
import { useGetJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/JobsContainer';
import { Job } from '../types';

const JobsContainer = () => {
    const { search, employment, location, sort, page } = useAppSelector((store) => store.search);
    const { data, isLoading, isError, error, isFetching } = useGetJobsQuery({
        search: search,
        employment: employment,
        location: location,
        sort: sort,
        page: page,
        limit: 10,
    });

    if (isLoading || isFetching) {
        return (
            <Wrapper>
                <div className='jobs-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }
    if (isError) {
        console.log(error);
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
                {data && data.totalJobs} job{data && data.totalJobs !== 1 && 's'} found
            </h5>
            <div className='jobs'>
                {data &&
                    data?.jobs.map((job: Job) => {
                        return <JobCard key={job.id} {...job} />;
                    })}
            </div>
            {data && data.numOfPages > 1 && <PaginationContainer numOfPages={data.numOfPages} />}
        </Wrapper>
    );
};

export default JobsContainer;
