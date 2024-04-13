import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { selectUserEmail, selectUserName } from '../features/userSlice';

const ProtectedRoute = ({children}) => {
    const user = useSelector(selectUserEmail)
    const auth = useSelector((store) => store.isAuthenticated);
    let location = useLocation();

    if(!auth) {
        return <Navigate to="/signin" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;