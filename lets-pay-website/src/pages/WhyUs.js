import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="why-us-header">
          <h1>Why Choose Let'sPay?</h1>
          <p className="why-us-subtitle">
            Experience the difference with our proven track record and innovative solutions
          </p>
        </div>

        <div className="why-us-content">
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-grid">
              <div className="experience-item">
                <div className="experience-number">1000+</div>
                <div className="experience-text">Man-years of experience across payment and enterprise domains</div>
              </div>
              <div className="experience-item">
                <div className="experience-number">9+</div>
                <div className="experience-text">Years of working closely with clients in different countries</div>
              </div>
              <div className="experience-item">
                <div className="experience-number">Global</div>
                <div className="experience-text">Presence across all continents with international recognition</div>
              </div>
            </div>
          </div>

          <div className="professional-expertise">
            <h2>Professional Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h3>Risk Management</h3>
                <p>Worked in multiple risk regions and verticals, providing secure solutions in challenging environments.</p>
              </div>
              <div className="expertise-card">
                <h3>Industry Knowledge</h3>
                <p>A pool of human minds with deep-rooted knowledge across multiple industry verticals.</p>
              </div>
              <div className="expertise-card">
                <h3>Payment Associations</h3>
                <p>Consultation on handling payment associations like VISA and Mastercard operations.</p>
              </div>
            </div>
          </div>

          <div className="approach-section">
            <h2>Hands-on Approach</h2>
            <div className="approach-features">
              <div className="approach-feature">
                <div className="feature-icon">🤝</div>
                <h3>End-to-End Partnership</h3>
                <p>Work with you from inception to closure, ensuring all objectives are fulfilled.</p>
              </div>
              <div className="approach-feature">
                <div className="feature-icon">🎯</div>
                <h3>Focused Delivery</h3>
                <p>Stay till the end to ensure you get the objectives fulfilled with complete satisfaction.</p>
              </div>
              <div className="approach-feature">
                <div className="feature-icon">🏢</div>
                <h3>SME Empowerment</h3>
                <p>We work with SMEs as a separate focus area to empower them with automation while managing risk.</p>
              </div>
            </div>
          </div>

          <div className="infrastructure-section">
            <h2>Infrastructure & Facilities</h2>
            <div className="infrastructure-grid">
              <div className="infrastructure-item">
                <h3>Self-Owned Facilities</h3>
                <p>Our own office, storage, and working facilities ensure complete control and security.</p>
              </div>
              <div className="infrastructure-item">
                <h3>Global Network</h3>
                <p>Established presence across all continents with local support and expertise.</p>
              </div>
              <div className="infrastructure-item">
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer support through our automated workflow-based helpdesk.</p>
              </div>
            </div>
          </div>

          <div className="quality-section">
            <h2>Quality Standards</h2>
            <div className="quality-features">
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>Second to none quality standards</span>
              </div>
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>Customer-centric service approach</span>
              </div>
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>State-of-the-art IT solutions</span>
              </div>
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>Highly motivated professional team</span>
              </div>
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>Comprehensive testing and validation</span>
              </div>
              <div className="quality-feature">
                <span className="quality-icon">✓</span>
                <span>Continuous improvement and innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
