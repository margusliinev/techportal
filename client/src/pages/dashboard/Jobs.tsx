import Wrapper from '../../assets/styled_components/pages/dashboard/Jobs';
import { JobsContainer,SearchContainer } from '../../components';

const Jobs = () => {
    return (
        <Wrapper>
            <SearchContainer />
            <JobsContainer />
        </Wrapper>
    );
};

export default Jobs;
