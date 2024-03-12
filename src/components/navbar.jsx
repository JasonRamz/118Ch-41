import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { FaBookOpen, FaHome, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="brand">
                    <Link to="/home">Lashroom</Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link">
                            <FaBookOpen /> Book Now!
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
