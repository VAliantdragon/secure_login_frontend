import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    // Check if the JWT token exists in Local Storage
    const token = localStorage.getItem('jwtToken');

    // If a token exists, allow access to the nested route (e.g., Dashboard)
    // Otherwise, redirect to the login page
    return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;