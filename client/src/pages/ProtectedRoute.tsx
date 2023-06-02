import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store';

const ProtectedRoute = () => {
    const { user } = useUserStore();
    return user ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
