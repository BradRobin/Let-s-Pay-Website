import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <div className="logo">
            <img 
              src="/letspay-logo-new.png" 
              alt="Let'sPay - Integrated Financial Management System" 
              className="logo-image"
              role="img"
              aria-label="Let'sPay company logo"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav id="main-navigation" className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            <li className="nav-item" role="none">
              <Link to="/" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Home
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/about" className="nav-link cyan-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                About
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/services" className="nav-link red-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Services
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/why-us" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Why Us
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/experience" className="nav-link cyan-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Experience
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/clients" className="nav-link red-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Clients
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link to="/contact" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)} role="menuitem">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`} aria-hidden="true"></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`} aria-hidden="true"></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`} aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
