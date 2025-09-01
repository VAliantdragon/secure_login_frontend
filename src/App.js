import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Secure Login System</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;