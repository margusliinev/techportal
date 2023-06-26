import moment from 'moment';
import { FaBriefcase, FaCalendar, FaLocationArrow, FaMoneyBill, FaServicestack } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Wrapper from '../styles/styled_components/components/JobCard';
import { Job } from '../types';

const JobCard = ({ company, position, employment, location, salary, expire_date, technologies, company_logo, id }: Job) => {
    const date = moment(expire_date).format('MMM Do, YYYY');

    return (
        <Wrapper>
            <Link className='job-card' to={`/jobs/${company}/${id}`}>
                <header>
                    <img src={company_logo} alt='company-logo' className='company-logo' />
                    <div className='info'>
                        <h5>{position}</h5>
                        <p>{company}</p>
                    </div>
                </header>
                <div className='content'>
                    <div className='content-center'>
                        <div className='job-info'>
                            <span className='icon'>
                                <FaLocationArrow />
                            </span>
                            <span className='text'>{location}</span>
                        </div>
                        <div className='job-info'>
                            <span className='icon'>
                                <FaCalendar />
                            </span>
                            <span className='text'>{date}</span>
                        </div>
                        <div className='job-info'>
                            <span className='icon'>
                                <FaBriefcase />
                            </span>
                            <span className='text'>{employment}</span>
                        </div>
                        <div className='job-info'>
                            <span className='icon'>
                                <FaMoneyBill />
                            </span>
                            <span className='text'>{'€' + salary.toString()}</span>
                        </div>
                    </div>
                    <div className='tech-stack'>
                        <div className='job-info'>
                            <span className='icon'>
                                <FaServicestack />
                            </span>
                            <span className='text'>Tech Stack:</span>
                        </div>
                        <div className='technologies'>
                            {technologies.map((item, index) => {
                                return (
                                    <div className='technology' key={index}>
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </Wrapper>
    );
};

export default JobCard;
