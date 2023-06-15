import { SearchContainer, JobsContainer } from '../../components';
import Wrapper from '../../assets/styled_components/pages/dashboard/Jobs';

const Jobs = () => {
    return (
        <Wrapper>
            <SearchContainer />
            <JobsContainer />
        </Wrapper>
    );
};

export default Jobs;
