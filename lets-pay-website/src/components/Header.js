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
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <div className="logo">
            <span className="logo-text">
              <span className="logo-blue">Let</span>
              <span className="logo-apostrophe">'</span>
              <span className="logo-cyan">sPay</span>
            </span>
            <div className="logo-tagline">Integrated Financial Management System</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link cyan-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link red-link" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/why-us" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)}>
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link cyan-link" onClick={() => setIsMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clients" className="nav-link red-link" onClick={() => setIsMenuOpen(false)}>
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link blue-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
