import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
    children: React.ReactNode;
};

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
