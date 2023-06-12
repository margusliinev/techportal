import styled from 'styled-components';
import moment from 'moment';
import { FaLocationArrow, FaCalendar, FaBriefcase, FaMoneyBill } from 'react-icons/fa';
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
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    background: var(--colorBackgroundSecondary);
    border-radius: var(--radius-md);
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-md);

    header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--colorGray1);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        h5 {
            letter-spacing: 0;
        }
    }
    .main-icon {
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
        background: var(--colorPrimary5);
        border-radius: var(--radius-md);
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--colorBackgroundSecondary);
        margin-right: 2rem;
    }
    .info {
        h5 {
            margin-bottom: 0.25rem;
        }
        p {
            margin: 0;
            text-transform: capitalize;
            color: var(--colorGray4);
        }
    }
    .pending {
        background: #fcefc7;
        color: #e9b949;
    }
    .interview {
        background: #e0e8f9;
        color: #647acb;
    }
    .declined {
        color: #d66a6a;
        background: #ffeeee;
    }
    .content {
        padding: 1rem 1.5rem;
    }
    .content-center {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.5rem;
        @media (min-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 992px) {
            grid-template-columns: 1fr;
        }
        @media (min-width: 1120px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .status {
        border-radius: var(--radius-md);
        text-transform: capitalize;

        text-align: center;
        width: 100px;
        height: 30px;
    }
    footer {
        margin-top: 1rem;
    }
    .edit-btn,
    .delete-btn {
        cursor: pointer;
        height: 30px;
    }
    .edit-btn {
        color: var(--colorGreen2);
        background: var(--colorGreen1);
        margin-right: 0.5rem;
    }
    .delete-btn {
        color: var(--colorRed2);
        background: var(--colorRed1);
    }
    &:hover .actions {
        visibility: visible;
    }
    .job-info {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;

        .icon {
            font-size: 1rem;
            margin-right: 1rem;
            display: flex;
            align-items: center;
            svg {
                color: var(--grey-400);
            }
        }
        .text {
            text-transform: capitalize;
            letter-spacing: var(--letterSpacing);
        }
    }
`;

export default JobCard;
