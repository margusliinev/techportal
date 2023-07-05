import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
    children: React.ReactNode;
};

// Check if user is logged in and only then allow them to access the route.

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user, userLoading } = useAppSelector((store) => store.user);

    if (!user && userLoading) {
        return;
    }

    if (!user) {
        return <Navigate to='/' />;
    }
    return children;
};
export default PrivateRoute;
