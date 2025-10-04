import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigation link is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30); // Trigger blur effect sooner
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container" onClick={handleNavClick}>
          <div className="logo">
            <img 
              src="/images/letspay_logo-removebg-preview.png?v=2" 
              alt="Let'spay - Integrated Financial Management System" 
              className="logo-image"
              aria-label="Let'spay company logo"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav id="main-navigation" className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            <li className="nav-item" role="none">
              <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                Home
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                About
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/county-government" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                County Gov.
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/hmis" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                HMIS
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/why-us" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                Why Us
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/experience" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                Experience
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/clients" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                Clients
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                Contact
              </NavLink>
            </li>
            <li className="nav-item" role="none">
                <NavLink to="/privacy-policy" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={handleNavClick} role="menuitem">
                  Privacy
                </NavLink>
              </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
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
      {/* Page dim overlay when mobile menu is open */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={handleNavClick}
        aria-hidden={!isMenuOpen}
      />
    </header>
  );
};

export default Header;
