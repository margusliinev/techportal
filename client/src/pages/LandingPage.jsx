import styled from 'styled-components';
import LandingLight from '../assets/images/landing-light.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container'>
                <div className='landing-info'>
                    <h1>
                        Job Portal For <span>Developers</span>
                    </h1>
                    <p>
                        Tech Portal is a job site designed exclusively for developers, connecting talented tech professionals with exciting career opportunities. With its user-friendly interface and
                        extensive database of tech-centric jobs, Tech Portal is the go-to platform for developers seeking their next coding adventure.
                    </p>
                    <div className='btn-container'>
                        <Link to={'/register'} className='btn'>
                            Login / Register
                        </Link>
                        <button className='btn demo-btn'>Demo User</button>
                    </div>
                </div>
                <img src={LandingLight} alt='landing image' className='landing-img' />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    nav {
        display: flex;
        align-items: center;
        height: 6rem;
        width: 90vw;
        margin: 0 auto;
        max-width: var(--width-lg);
    }
    .container {
        min-height: calc(100vh - 6rem);
        display: grid;
        place-items: center;
        .landing-info,
        .landing-img {
            margin-bottom: 6rem;
        }
    }
    h1 {
        margin-bottom: 1rem;
        line-height: 1.25;
        color: var(--colorGray9);
        span {
            color: var(--colorPrimary5);
            display: block;
        }
    }
    p {
        color: var(--colorGray8);
        line-height: 1.75;
        margin-bottom: 0.5rem;
        max-width: 900px;
        font-size: 18px;
    }
    .btn-container {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .demo-btn {
            background-color: var(--colorGray6);
        }
    }
    .btn {
        font-size: 18px;
    }
    .landing-img {
        display: none;
        height: unset;
    }
    @media (min-width: 1024px) {
        .container {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .landing-img {
            display: block;
        }
    }
`;

export default LandingPage;
