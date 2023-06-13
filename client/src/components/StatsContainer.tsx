import styled from 'styled-components';
import { getStats } from '../utils/dataFetching';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components';

const StatsContainer = () => {
    const { data, isLoading, isError } = useQuery(['stats'], getStats);

    if (isLoading) {
        return (
            <Wrapper>
                <div className='stats-center'>
                    <Loader />
                </div>
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <div className='stats-center'>
                    <h3>Oops! Internal Server Error</h3>
                    <p>Service is currently down, please try again later</p>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className='stats'>
                {data.data.topTechnologies.slice(0, 3).map((technology, index) => {
                    return (
                        <article key={index}>
                            <header>
                                <span className='count'>{technology.count}</span>
                                <span className='technology'>{technology.technology}</span>
                            </header>
                            <h5 className='title'>
                                {technology.technology} is used by <span>{technology.count}</span> companies
                            </h5>
                        </article>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .stats {
        display: grid;
        row-gap: 2rem;
        padding: 2rem 0;
    }
    @media (min-width: 768px) {
        .stats {
            grid-template-columns: 1fr 1fr;
            column-gap: 1rem;
        }
    }
    @media (min-width: 1536px) {
        .stats {
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 1rem;
        }
    }
    .stats-center {
        display: grid;
        place-items: center;
        text-align: center;
        row-gap: 1rem;
        p {
            color: var(--colorFontSecondary);
        }
    }
    article {
        padding: 2rem;
        background: var(--colorBackgroundSecondary);
        border-radius: var(--radius-md);
        display: grid;
        row-gap: 0.5rem;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-self: start;
        }
        .count {
            display: block;
            font-weight: 700;
            font-size: 50px;
        }
        .technology {
            font-size: 1.25rem;
            padding: 0.5rem;
            border-radius: var(--radius-md);
            color: var(--colorBackgroundPrimary);
            font-weight: 600;
            font-family: 'Poppins';
        }
        .title {
            margin: 0;
            text-transform: capitalize;
            letter-spacing: var(--letterSpacing);
            text-align: left;
            margin-top: 1rem;
            align-self: end;
            font-size: 22px;
        }
    }
    article:nth-of-type(1) {
        border-bottom: 5px solid var(--colorGreen1);
        .technology {
            background-color: var(--colorGreen1);
        }
        .title {
            span {
                color: var(--colorGreen1);
            }
        }
    }
    article:nth-of-type(2) {
        border-bottom: 5px solid var(--colorYellow1);
        .technology {
            background-color: var(--colorYellow1);
        }
        .title {
            span {
                color: var(--colorYellow1);
            }
        }
    }
    article:nth-of-type(3) {
        border-bottom: 5px solid var(--colorRed1);
        .technology {
            background-color: var(--colorRed1);
        }
        .title {
            span {
                color: var(--colorRed1);
            }
        }
    }
`;

export default StatsContainer;
