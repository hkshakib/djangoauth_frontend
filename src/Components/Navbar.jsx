import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const handleLogout = () => {
        // Call the logout function from the parent component
        onLogout();
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Authentication</div>
            <ul className="navbar-nav">
                {isLoggedIn ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
