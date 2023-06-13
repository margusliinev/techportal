import styled from 'styled-components';
import moment from 'moment';
import { FaLocationArrow, FaCalendar, FaBriefcase, FaMoneyBill, FaServicestack } from 'react-icons/fa';
import { Job } from '../types';

const JobCard = ({ position, company, job_location, job_type, expire_date, technologies, logo, salary }: Job) => {
    let date: any = moment(expire_date);
    date = date.format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <img src={`${logo}`} className='main-icon' alt='imgbox' />
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
                        <span className='text'>{job_location}</span>
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
                        <span className='text'>{job_type}</span>
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
                        {technologies.map((item) => {
                            return <div className='technology'>{item}</div>;
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    background: var(--colorBackgroundSecondary);
    border-radius: var(--radius-md);
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: var(--shadow-md);
    header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--colorGray1);
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 1rem;
        column-gap: 0.25rem;
        align-items: center;
        .btn {
            background-color: var(--colorGreen1);
            color: var(--colorBackgroundPrimary);
            font-weight: 600;
            font-family: 'Poppins';
            transition: var(--transition);
        }
        .btn:hover {
            background-color: #4ade80;
        }
    }
    .main-icon {
        width: 70px;
        height: 70px;
        border-radius: var(--radius-md);
        margin-right: 1.5rem;
    }
    @media (min-width: 400px) {
        header {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr auto;
            row-gap: 1.5rem;
        }
    }
    @media (min-width: 640px) {
        header {
            grid-template-columns: auto 1fr auto;
            grid-template-rows: 1fr;
            row-gap: 0;
        }
    }
    @media (min-width: 1280px) {
        header {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr auto;
            row-gap: 1.5rem;
        }
    }
    @media (min-width: 1536px) {
        header {
            grid-template-columns: auto 1fr auto;
            grid-template-rows: 1fr;
            row-gap: 0;
        }
    }
    .info {
        h5 {
            margin-bottom: 0.25rem;
        }
        p {
            margin: 0;
            text-transform: capitalize;
            color: var(--colorFontSecondary);
        }
    }
    .content {
        padding: 1rem 1.5rem;
    }
    .content-center {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.5rem;
        @media (min-width: 400px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .job-info {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        .icon {
            font-size: 1.1rem;
            margin-right: 1rem;
            display: flex;
            align-items: center;
            svg {
                color: var(--colorPrimary3);
            }
        }
        .text {
            text-transform: capitalize;
        }
    }
    .technologies {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
    }
    .technology {
        padding: 0.125rem;
        border-radius: var(--radius-sm);
        font-size: 14px;
    }
    .tech-stack {
        margin-top: 1rem;
    }
`;

export default JobCard;
