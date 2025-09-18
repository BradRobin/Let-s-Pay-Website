import React from 'react';
import './Footer.css';

const Footer = () => {
  // Dark mode removed; site stays consistently light

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section company-info">
          <div className="footer-logo">
            <img 
              src="/images/letspay_logo-removebg-preview.png?v=2" 
              alt="Let'spay Transparent Logo" 
              className="footer-logo-image"
            />
          </div>
          <p className="company-description">
            <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is an international private limited company providing 
            comprehensive financial management and enterprise solutions across 
            all continents of the world.
          </p>
          <div className="contact-info">
            <p><strong>Address:</strong> P.O. BOX 64690-0060, NAIROBI, KENYA</p>
            <p><strong>Phone:</strong> +254 722 520 906 / +254 720 22 66 66</p>
            <p><strong>Email:</strong> btheuri@letspayltd.com</p>
            <p><strong>Website:</strong> www.letspayltd.com</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="footer-section partners">
          <h3 className="footer-title">Our Partners</h3>
          <div className="logo-grid">
            <div className="logo-item">
              <img 
                src="/images/fortinet logo.png" 
                alt="Fortinet Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/hikvision logo.png" 
                alt="Hikvision Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/infinidat logo.png" 
                alt="Infinidat Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/lanner logo.png" 
                alt="Lanner Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/persist security logo.png" 
                alt="Persist Security Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/19 labs logo.png" 
                alt="19 Labs Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/Senter logo.png" 
                alt="Senter Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/ZTE logo.png" 
                alt="ZTE Partner" 
                className="partner-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/handheld logo.png" 
                alt="Handheld Partner" 
                className="partner-logo"
              />
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="footer-section clients">
          <h3 className="footer-title">Our Clients</h3>
          <div className="logo-grid">
            <div className="logo-item">
              <img 
                src="/images/WHO logo.png" 
                alt="World Health Organization Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/amref logo.png" 
                alt="AMREF Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/Kenyatta university logo.png" 
                alt="Kenyatta University Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/evans medical centre logo.png" 
                alt="Evans Medical Centre Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/Kiambu county government logo.png" 
                alt="Kiambu County Government Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/embu county government logo.png" 
                alt="Embu County Government Client" 
                className="client-logo"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/images/Narok county government logo.png" 
                alt="Narok County Government Client" 
                className="client-logo"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/why-us" className="footer-link">Why Us</a></li>
            <li><a href="/experience" className="footer-link">Experience</a></li>
            <li><a href="/clients" className="footer-link">Clients</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> Limited. All rights reserved. | 
              <span className="highlight-blue"> International Trademark Brand</span> | 
              Registered in <span className="highlight-red">KENYA</span>
            </p>
            <div className="footer-controls">
              <div className="footer-social">
                <span className="social-text">Follow us:</span>
                <div className="social-links">
                  <a href="https://linkedin.com/company/letspay" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💼</span>
                  </a>
                  <a href="https://twitter.com/letspay" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">🐦</span>
                  </a>
                  <a href="https://facebook.com/letspay" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">📘</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
