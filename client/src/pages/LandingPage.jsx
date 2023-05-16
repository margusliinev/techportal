import styled from 'styled-components';
import LandingDark from '../assets/images/landing-dark.svg';
import { Logo } from '../components';

const LandingPage = () => {
    return (
        <Wrapper>
            <Logo />
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
                        <button className='btn'>Login / Register</button>
                        <button className='btn'>Demo User</button>
                    </div>
                </div>
                <img src={LandingDark} alt='landing image' className='landing-img' />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .container {
        min-height: calc(100vh - 6rem);
        display: grid;
        place-items: center;
        margin-top: -3rem;
    }
    h1 {
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.25;
        color: var(--colorWhite);
        span {
            color: var(--colorPrimary5);
            display: block;
        }
    }
    p {
        color: var(--colorFontSecondary);
        line-height: 1.75;
        margin-bottom: 1.5rem;
        max-width: 900px;
    }
    .btn-container {
        display: flex;
        gap: 1rem;
    }
    button {
        font-size: 18px;
    }
    .landing-img {
        display: none;
        height: unset;
    }
    @media (min-width: 1280px) {
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
