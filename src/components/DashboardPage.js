import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css'; // Import the new CSS

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome to the Dashboard!</h2>
            <p>This is a protected area. You are successfully logged in.</p>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
}

export default DashboardPage;