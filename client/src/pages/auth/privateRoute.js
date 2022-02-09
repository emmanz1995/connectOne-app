import React, { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const isLoggedIn = useSelector(state => state?.auth);
    const { isAuthenticated } = isLoggedIn;
    if(!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    console.log(isAuthenticated)

    return children
}
