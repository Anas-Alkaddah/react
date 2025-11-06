import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

function RequireAuth({ children }) {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}

export default RequireAuth;


