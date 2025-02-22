// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Cake Shop Logo"
                    className="logoicon"
                />
                <h2>Niharika's Cake Shop</h2>
            </Link>
            <nav className="nav">
                <Link to="/" className="navlink">Home</Link>
                <Link to="/categories" className="navlink">Categories</Link>
                <Link to="/cart" className="navlink">Cart</Link>
                <Link to="/about" className="navlink">About Us</Link>
            </nav>
        </header>
    );
}

export default Header;
