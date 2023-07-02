import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user } = useAppSelector((store) => store.user);
    if (!user) {
        return <Navigate to='/' />;
    }
    return children;
};
export default PrivateRoute;
