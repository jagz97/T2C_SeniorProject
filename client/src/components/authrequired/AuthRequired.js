import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const AuthRequired = () => {
    const { user } = useAuth()
    const location = useLocation()
    
    return (
        user ? <Outlet/> : <Navigate to="/login" state={{from: location.pathname}} replace={true}/>
    )
}

export default AuthRequired