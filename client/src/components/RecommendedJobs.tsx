import { useGetRecommendedJobsQuery } from '../features/api/apiSlice';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/RecommendedJobs';
import { JobCard } from '.';

const RecommendedJobs = () => {
    const { user } = useAppSelector((store) => store.user);
    const { data } = useGetRecommendedJobsQuery({ userId: user?.id });

    if (!data) {
        return (
            <Wrapper>
                <div>No Jobs found</div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {data.recommendedJobs.length > 0 ? (
                data.recommendedJobs.map((job) => {
                    return <JobCard key={job.id} {...job} />;
                })
            ) : (
                <div>Could not find any jobs, sure you added all the technologies you know?</div>
            )}
        </Wrapper>
    );
};

export default RecommendedJobs;
