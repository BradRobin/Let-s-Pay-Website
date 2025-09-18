import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [hoverMenu, setHoverMenu] = useState(null);
  const countyRef = useRef(null);
  const hmisRef = useRef(null);

  const openMenu = (key) => setHoverMenu(key);
  const closeMenu = () => setHoverMenu(null);
  const toggleDropdown = (key) => setHoverMenu((prev) => (prev === key ? null : key));

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideCounty = countyRef.current && countyRef.current.contains(event.target);
      const clickedInsideHmis = hmisRef.current && hmisRef.current.contains(event.target);
      if (!clickedInsideCounty && !clickedInsideHmis) {
        setHoverMenu(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setHoverMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
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
              <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Home
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                About
              </NavLink>
            </li>
            <li 
              className={`nav-item has-dropdown${hoverMenu === 'county' ? ' open' : ''}`} 
              role="none"
              ref={countyRef}
            >
              <div className="nav-link-with-toggle">
                <NavLink 
                  to="/county-government" 
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={hoverMenu === 'county'}
                  aria-controls="dropdown-county"
                >
                  County Gov.
                </NavLink>
                <button 
                  type="button"
                  className={`dropdown-toggle${hoverMenu === 'county' ? ' open' : ''}`}
                  aria-label="Toggle County Gov. submenu"
                  aria-expanded={hoverMenu === 'county'}
                  aria-controls="dropdown-county"
                  onClick={() => toggleDropdown('county')}
                >
                  ▾
                </button>
              </div>
              <div id="dropdown-county" className="dropdown" role="menu">
                <NavLink to="/county-government/overview" className="dropdown-item" role="menuitem">Overview</NavLink>
                <NavLink to="/county-government/parking" className="dropdown-item" role="menuitem">Parking Fees</NavLink>
                <NavLink to="/county-government/licenses" className="dropdown-item" role="menuitem">Licenses</NavLink>
              </div>
            </li>
            <li 
              className={`nav-item has-dropdown${hoverMenu === 'hmis' ? ' open' : ''}`} 
              role="none"
              ref={hmisRef}
            >
              <div className="nav-link-with-toggle">
                <NavLink 
                  to="/hmis" 
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={hoverMenu === 'hmis'}
                  aria-controls="dropdown-hmis"
                >
                  HMIS
                </NavLink>
                <button 
                  type="button"
                  className={`dropdown-toggle${hoverMenu === 'hmis' ? ' open' : ''}`}
                  aria-label="Toggle HMIS submenu"
                  aria-expanded={hoverMenu === 'hmis'}
                  aria-controls="dropdown-hmis"
                  onClick={() => toggleDropdown('hmis')}
                >
                  ▾
                </button>
              </div>
              <div id="dropdown-hmis" className="dropdown" role="menu">
                <NavLink to="/hmis/outpatient" className="dropdown-item" role="menuitem">Outpatient</NavLink>
                <NavLink to="/hmis/inpatient" className="dropdown-item" role="menuitem">Inpatient</NavLink>
                <NavLink to="/hmis/pharmacy" className="dropdown-item" role="menuitem">Pharmacy</NavLink>
              </div>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/why-us" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Why Us
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/experience" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Experience
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/clients" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Clients
              </NavLink>
            </li>
            <li className="nav-item" role="none">
              <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Contact
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
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
    </header>
  );
};

export default Header;
