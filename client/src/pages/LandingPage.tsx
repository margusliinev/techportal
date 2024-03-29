import { Link } from 'react-router-dom';

import LandingDark from '../assets/images/landing-dark.svg';
import LandingLight from '../assets/images/landing-light.svg';
import { Logo } from '../components';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/pages/LandingPage';

const LandingPage = () => {
    const { theme } = useAppSelector((store) => store.navigation);
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
                        <Link to={'/'} className='btn explore-btn'>
                            Explore Job Market
                        </Link>
                    </div>
                </div>
                {theme === 'dark-theme' ? <img src={LandingDark} alt='landing image' className='landing-img' /> : <img src={LandingLight} alt='landing image' className='landing-img' />}
            </div>
        </Wrapper>
    );
};

export default LandingPage;
