import { useGetRecommendedJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/RecommendedJobs';
import { JobCard } from '.';

const RecommendedJobs = () => {
    const { user } = useAppSelector((store) => store.user);
    const { data, isLoading } = useGetRecommendedJobsQuery({ userId: user?.id });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return (
            <Wrapper>
                <div>No data</div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {data
                ? data.recommendedJobs.map((job) => {
                      return <JobCard key={job.id} {...job} />;
                  })
                : null}
        </Wrapper>
    );
};

export default RecommendedJobs;
