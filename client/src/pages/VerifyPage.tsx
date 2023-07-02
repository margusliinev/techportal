import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Loader, Logo } from '../components';
import { useVerifyMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/pages/VerifyPage';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const VerifyPage = () => {
    const query = useQuery();
    const [verify, { isLoading }] = useVerifyMutation();

    useEffect(() => {
        const verificationToken = query.get('token');
        const email = query.get('email');
        verify({ verificationToken, email }).catch(() => {
            return;
        });
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <nav>
                    <div className='nav-center'>
                        <div className='nav-container'>
                            <Logo />
                        </div>
                    </div>
                </nav>
                <main>
                    <Loader />
                </main>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <nav>
                <div className='nav-center'>
                    <div className='nav-container'>
                        <Logo />
                    </div>
                </div>
            </nav>
            <main>
                <h3>Your account has been verified</h3>
                <Link to={'/login'} className='btn back-to-login-btn'>
                    Please Login
                </Link>
            </main>
        </Wrapper>
    );
};

export default VerifyPage;
