import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // <-- 1. IMPORT THE CSS FILE

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username: username,
                password: password,
            });
            localStorage.setItem('jwtToken', response.data.token);
            navigate('/dashboard');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed. Please check your credentials.');
            } else {
                setError('Login failed. An unexpected error occurred.');
            }
        }
    };

    return (
        // 2. USE THE CSS CLASSES
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default LoginPage;