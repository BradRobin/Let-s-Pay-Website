import React from 'react';
import './Clients.css';

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-header">
          <h1>Our Clients</h1>
          <p className="clients-subtitle">
            Trusted by leading organizations worldwide across all continents
          </p>
        </div>

        <div className="client-categories">
          <div className="client-category">
            <h2>Banking & Financial Institutions</h2>
            <div className="client-grid">
              <div className="client-item">
                <div className="client-logo">🏦</div>
                <h3>International Banks</h3>
                <p>Tier one bank core system implementation across multiple continents</p>
              </div>
              <div className="client-item">
                <div className="client-logo">💳</div>
                <h3>Payment Processors</h3>
                <p>VISA and Mastercard operations consultation and implementation</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏛️</div>
                <h3>Central Banks</h3>
                <p>National payment infrastructure and digital currency solutions</p>
              </div>
              <div className="client-item">
                <div className="client-logo">📊</div>
                <h3>Investment Firms</h3>
                <p>Secure financial management and trading platform solutions</p>
              </div>
            </div>
          </div>

          <div className="client-category">
            <h2>Government & Public Sector</h2>
            <div className="client-grid">
              <div className="client-item">
                <div className="client-logo">🏛️</div>
                <h3>National Governments</h3>
                <p>E-government solutions and digital transformation initiatives</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏛️</div>
                <h3>County Governments</h3>
                <p>Revenue collection and citizen service management systems</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏛️</div>
                <h3>Government Agencies</h3>
                <p>Licensing, permits, and regulatory compliance management</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏛️</div>
                <h3>Public Utilities</h3>
                <p>Bill payment and service management for public utilities</p>
              </div>
            </div>
          </div>

          <div className="client-category">
            <h2>Healthcare & Medical</h2>
            <div className="client-grid">
              <div className="client-item">
                <div className="client-logo">🏥</div>
                <h3>Hospital Networks</h3>
                <p>Hospital Management Information Systems (HMIS) implementation</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏥</div>
                <h3>Medical Centers</h3>
                <p>Unified patient records and telemedicine platform solutions</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏥</div>
                <h3>Health Ministries</h3>
                <p>National health information systems and citizen health cards</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏥</div>
                <h3>Insurance Providers</h3>
                <p>Health insurance claim processing and management systems</p>
              </div>
            </div>
          </div>

          <div className="client-category">
            <h2>Enterprise & Corporate</h2>
            <div className="client-grid">
              <div className="client-item">
                <div className="client-logo">🏢</div>
                <h3>Multinational Corporations</h3>
                <p>Global payment processing and financial management solutions</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏢</div>
                <h3>Small & Medium Enterprises</h3>
                <p>Cost-effective automation and risk management solutions</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏢</div>
                <h3>Technology Companies</h3>
                <p>Integration services and custom development solutions</p>
              </div>
              <div className="client-item">
                <div className="client-logo">🏢</div>
                <h3>Retail & E-commerce</h3>
                <p>Payment gateway and transaction processing solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <h2>Client Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Let'sPay has revolutionized our payment processing capabilities. Their secure and reliable platform has significantly improved our operational efficiency."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Banking Executive</h4>
                  <span>International Bank</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The HMIS solution provided by Let'sPay has transformed our healthcare delivery. The unified patient records system is exceptional."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Hospital Administrator</h4>
                  <span>Regional Medical Center</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Their 24/7 support and technical expertise have been invaluable. Let'sPay truly understands our business requirements."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Government Official</h4>
                  <span>County Government</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="global-presence">
          <h2>Global Presence</h2>
          <div className="presence-stats">
            <div className="presence-item">
              <div className="presence-icon">🌍</div>
              <h3>All Continents</h3>
              <p>Active presence and successful implementations worldwide</p>
            </div>
            <div className="presence-item">
              <div className="presence-icon">🏢</div>
              <h3>1000+ Projects</h3>
              <p>Successfully delivered projects across various industries</p>
            </div>
            <div className="presence-item">
              <div className="presence-icon">🤝</div>
              <h3>Long-term Partnerships</h3>
              <p>Established relationships with clients spanning over a decade</p>
            </div>
            <div className="presence-item">
              <div className="presence-icon">⭐</div>
              <h3>99.9% Satisfaction</h3>
              <p>Client satisfaction rate with our solutions and services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
