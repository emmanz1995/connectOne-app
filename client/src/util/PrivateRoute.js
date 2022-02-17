import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const location = useLocation()
    const currentUser = JSON.parse(localStorage.getItem('jwt'));
    if (!currentUser?.token) {
        return <Navigate to='/' state={{ from: location }} />
    }

    return children;
}