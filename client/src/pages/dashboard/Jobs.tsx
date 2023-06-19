import { JobsContainer, SearchContainer } from '../../components';
import Wrapper from '../../styles/styled_components/pages/dashboard/Jobs';

const Jobs = () => {
    return (
        <Wrapper>
            <SearchContainer />
            <JobsContainer />
        </Wrapper>
    );
};

export default Jobs;
