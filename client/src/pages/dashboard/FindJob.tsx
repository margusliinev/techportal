import { UserSkills } from '../../components';
import Wrapper from '../../styles/styled_components/pages/dashboard/FindJob';

const FindJob = () => {
    return (
        <Wrapper>
            <h4 className='find-job-title'>List your skills and we&apos;ll find the perfect job for you!</h4>
            <div className='content-divider'></div>
            <UserSkills />
            <div className='content-divider'></div>
        </Wrapper>
    );
};

export default FindJob;
