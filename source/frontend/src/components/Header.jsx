import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <img src={logo} alt="AWCS Logo" />
                    <span className="company-name">Abhishree Workforce Corporate Services</span>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#clients" onClick={() => setIsMenuOpen(false)}>Clients</a></li>
                        <li><a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Get in Touch</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
