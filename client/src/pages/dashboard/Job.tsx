import moment from 'moment';
import { FaCalendar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import { Loader } from '../../components';
import { useGetJobQuery } from '../../features/api/apiSlice';
import Wrapper from '../../styles/styled_components/pages/dashboard/Job';

const Job = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useGetJobQuery(id || '');
    const date: string = moment(data?.job.expire_date).format('MMM Do, YYYY');

    if (isLoading) {
        return (
            <Wrapper>
                <div className='job-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    // If the page does not exist, redirect to the jobs page.

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
            <div className='job-container'>
                <div className='job-header'>
                    <img src={data?.job.company_logo} alt='company logo' className='job-company-logo' />
                    <div>
                        <h4 className='job-position'>{data?.job.position}</h4>
                        <h6 className='job-company'>{data?.job.company}</h6>
                    </div>
                    <p className='job-deadline'>
                        <span>
                            <FaCalendar />
                        </span>
                        {date}
                    </p>
                </div>
                <article className='job-post'>{data?.job.company_post}</article>
            </div>
        </Wrapper>
    );
};

export default Job;
