import styled from 'styled-components';
import error from '../assets/images/error-dark.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div>
                    <img src={error} alt='error image' />
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

const Wrapper = styled.div`
    .container {
        min-height: 100vh;
        display: grid;
        place-items: center;
        div {
            text-align: center;
        }
    }
    img {
        height: unset;
        max-width: 600px;
        display: block;
        margin: 0 auto 2rem auto;
        object-fit: contain;
    }
    h3 {
        margin-bottom: 0.5rem;
        color: var(--colorFontSecondary);
        font-weight: 500;
    }
    p {
        margin-top: 0;
        color: var(--colorFontSecondary);
        margin-bottom: 1rem;
    }
`;

export default ErrorPage;
