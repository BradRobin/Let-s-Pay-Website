import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Comprehensive solutions for financial management and enterprise needs
          </p>
        </div>

        <div className="services-grid">
          <div className="service-category">
            <h2>Payment Solutions</h2>
            <div className="service-items">
              <div className="service-item">
                <h3>Mobile Payments</h3>
                <p>Secure mobile wallet, mPOS, and mobile banking solutions</p>
              </div>
              <div className="service-item">
                <h3>Cross-border Transfers</h3>
                <p>Multi-model card, internet/mobile cross-border money transfers</p>
              </div>
              <div className="service-item">
                <h3>Digital Wallets</h3>
                <p>P2P, P2G, G2G, and B2G mobile payment solutions</p>
              </div>
              <div className="service-item">
                <h3>Internet Banking</h3>
                <p>SMS Banking, Pay Switch, Pre-payment, Gift, Wallets, Tokens</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <h2>Government Solutions</h2>
            <div className="service-items">
              <div className="service-item">
                <h3>Revenue Collection</h3>
                <p>County revenue instruments for tax collection and management</p>
              </div>
              <div className="service-item">
                <h3>G2C App</h3>
                <p>One App for all government interactions and transactions</p>
              </div>
              <div className="service-item">
                <h3>Licenses & Permits</h3>
                <p>Real-time off-site payment of licenses with QR code receipts</p>
              </div>
              <div className="service-item">
                <h3>Property Management</h3>
                <p>Land rates, building plans, and property management systems</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <h2>Enterprise Solutions</h2>
            <div className="service-items">
              <div className="service-item">
                <h3>ERP System</h3>
                <p>Integrated Financial Management with multiple modules</p>
              </div>
              <div className="service-item">
                <h3>Human Resources</h3>
                <p>Complete HR management and employee services</p>
              </div>
              <div className="service-item">
                <h3>Document Management</h3>
                <p>Electronic Document Management System (E-DMS)</p>
              </div>
              <div className="service-item">
                <h3>Business Intelligence</h3>
                <p>AI-powered analytics and reporting systems</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <h2>Healthcare Solutions</h2>
            <div className="service-items">
              <div className="service-item">
                <h3>HMIS</h3>
                <p>Hospital Management Information Systems</p>
              </div>
              <div className="service-item">
                <h3>One Citizen, One Card</h3>
                <p>Unified medical records across all hospitals</p>
              </div>
              <div className="service-item">
                <h3>Telemedicine</h3>
                <p>Remote healthcare access and consultation services</p>
              </div>
              <div className="service-item">
                <h3>Case Management</h3>
                <p>Comprehensive patient case tracking and management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="technology-section">
          <h2>Technology Features</h2>
          <div className="tech-features">
            <div className="tech-feature">
              <span className="tech-icon">🔐</span>
              <span>Bank-grade Security</span>
            </div>
            <div className="tech-feature">
              <span className="tech-icon">⚡</span>
              <span>Real-time Processing</span>
            </div>
            <div className="tech-feature">
              <span className="tech-icon">📱</span>
              <span>Mobile Apps (iOS & Android)</span>
            </div>
            <div className="tech-feature">
              <span className="tech-icon">🌐</span>
              <span>GPS Tagged Payments</span>
            </div>
            <div className="tech-feature">
              <span className="tech-icon">🤖</span>
              <span>AI & Business Intelligence</span>
            </div>
            <div className="tech-feature">
              <span className="tech-icon">☁️</span>
              <span>Cloud Storage Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
