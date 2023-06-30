import { AiFillStar } from 'react-icons/ai';

import { JobCard, Loader, PaginationContainer } from '../components';
import { useGetJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/JobsContainer';
import { Job } from '../types';

const JobsContainer = () => {
    const { user } = useAppSelector((store) => store.user);
    const { search, employment, location, sort, page } = useAppSelector((store) => store.search);
    const { data, isLoading, isError, isFetching } = useGetJobsQuery(
        {
            search: search,
            employment: employment,
            location: location,
            sort: sort,
            page: page,
            limit: 10,
            userId: user?.id,
        },
        {
            refetchOnMountOrArgChange: true,
        }
    );

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
                {user && (
                    <span className='legend'>
                        <span className='legend-icon'>
                            <AiFillStar />
                        </span>
                        <span>-</span>
                        <p>Recommended based on your profile</p>
                    </span>
                )}
            </h5>
            <div className='jobs'>
                {data ? (
                    data?.jobs.map((job: Job) => {
                        return <JobCard key={job.id} {...job} />;
                    })
                ) : (
                    <div>No jobs found</div>
                )}
            </div>
            {data && data.numOfPages > 1 && <PaginationContainer numOfPages={data.numOfPages} />}
        </Wrapper>
    );
};

export default JobsContainer;
