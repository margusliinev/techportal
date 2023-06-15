import moment from 'moment';
import { FaLocationArrow, FaCalendar, FaBriefcase, FaMoneyBill, FaServicestack } from 'react-icons/fa';
import { Job } from '../types';
import Wrapper from '../assets/styled_components/components/JobCard';

const JobCard = ({ company, position, employment, location, salary, expire_date, technologies }: Job) => {
    let date = moment(expire_date).format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
                <button className='btn'>Apply</button>
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
                        <span className='text'>{'€' + salary}</span>
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
        </Wrapper>
    );
};

export default JobCard;
