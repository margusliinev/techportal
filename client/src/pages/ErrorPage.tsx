import { Link } from 'react-router-dom';

import errorDark from '../assets/images/error-dark.svg';
import errorLight from '../assets/images/error-light.svg';
import { useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/pages/ErrorPage';

const ErrorPage = () => {
    const { theme } = useAppSelector((store) => store.navigation);
    return (
        <Wrapper>
            <div className='container'>
                <div>
                    {theme === 'dark-theme' ? <img src={errorDark} alt='error image' /> : <img src={errorLight} alt='error image' />}
                    <h3>Ohh! Page Not Found</h3>
                    <p>We can&apos;t seem to find the page you&apos;re looking for</p>
                    <Link to={'/'} className='btn'>
                        Back Home
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default ErrorPage;
