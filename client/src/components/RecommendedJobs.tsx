import { useGetRecommendedJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/RecommendedJobs';
import { JobCard } from '.';
import { Loader } from '.';

const RecommendedJobs = () => {
    const { user } = useAppSelector((store) => store.user);

    // Fetch recommended jobs for the user using the user id.

    const { data, isFetching, isError } = useGetRecommendedJobsQuery({ userId: user?.id });

    if (isFetching) {
        return (
            <Wrapper>
                <div className='recommended-center'>
                    <div className='loader-center'>
                        <Loader />
                    </div>
                </div>
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <h5>No Jobs found</h5>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {data && data.recommendedJobs.length > 0 ? (
                data.recommendedJobs.map((job) => {
                    return <JobCard key={job.id} {...job} />;
                })
            ) : (
                <h5>Add more skills to your profile to find a match</h5>
            )}
        </Wrapper>
    );
};

export default RecommendedJobs;
