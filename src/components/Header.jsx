import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TypingTest</Link>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
      </nav>
      <div className="header-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;