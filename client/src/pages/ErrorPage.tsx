import Wrapper from '../assets/styled_components/pages/ErrorPage';
import errorDark from '../assets/images/error-dark.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div>
                    <img src={errorDark} alt='error image' />
                    <h3>Ohh! Page Not Found</h3>
                    <p>We can't seem to find the page you're looking for</p>
                    <Link to={'/'} className='btn'>
                        Back Home
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default ErrorPage;
