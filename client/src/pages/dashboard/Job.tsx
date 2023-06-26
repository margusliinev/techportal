import { useNavigate, useParams } from 'react-router-dom';

import { Loader } from '../../components';
import { useGetJobQuery } from '../../features/api/apiSlice';
import Wrapper from '../../styles/styled_components/pages/dashboard/Job';

const Job = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useGetJobQuery(id || '');

    if (isLoading) {
        return (
            <Wrapper>
                <div className='job-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (isError) {
        setTimeout(() => {
            navigate('/jobs');
        }, 1000);
        return (
            <Wrapper>
                <div className='job-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <embed src={data?.job.company_post} type='' />
        </Wrapper>
    );
};

export default Job;
