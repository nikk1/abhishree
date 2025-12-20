import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>AWCS</h3>
                    <p>Building corporate trust through workforce excellence.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:abhishree.co@gmail.com">abhishree.co@gmail.com</a></p>
                    <p>Location: PAN India</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#clients">For Clients</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Abhishree Workforce Corporate Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
