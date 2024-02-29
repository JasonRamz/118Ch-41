import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navbar.css'; // Import your CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="brand">
                    <Link to="/home">Lashroom</Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Schedule</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/createUser" className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
