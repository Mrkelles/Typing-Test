import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </div>
      <p>&copy; 2024 Typingmeter. All rights reserved.</p>
    </footer>
  );
};

export default Footer;