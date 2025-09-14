import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* First Section - Payment Solutions text left, image right */}
      <section className="flow-section payment-solutions-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Payment <span className="highlight-blue">Solutions</span></h1>
            <p className="intro-text">
              <span className="highlight-cyan">Let'sPay</span> provides comprehensive payment solutions 
              including mobile payments, card processing, and digital wallets. Our platform supports 
              multiple payment methods including Cash, Debit, Credit Cards, Mobile Wallets, and direct 
              bank deposits.
            </p>
            <div className="service-features">
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h3 className="highlight-blue">Card Processing</h3>
                <p>Secure credit and debit card processing with real-time validation</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3 className="highlight-cyan">Mobile Payments</h3>
                <p>Mobile wallet integration and USSD payment solutions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏦</div>
                <h3 className="highlight-red">Bank Integration</h3>
                <p>Direct bank deposit and real-time payment processing</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Holistic Payment Architecture.png" 
                alt="Let'sPay Holistic Payment Architecture" 
                className="section-image"
              />
              <h3>Payment Architecture</h3>
              <p>Comprehensive Payment Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Healthcare Solutions text right, image left */}
      <section className="flow-section healthcare-solutions-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Health care solutions.png" 
                alt="Let'sPay Healthcare Solutions" 
                className="section-image"
              />
              <h3>Healthcare Solutions</h3>
              <p>Comprehensive Medical Systems</p>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Healthcare <span className="highlight-cyan">Solutions</span></h2>
            <p className="healthcare-text">
              Our <span className="highlight-blue">Hospital Management Information Systems (HMIS)</span> 
              provide comprehensive healthcare solutions including patient management, medical records, 
              billing, and telemedicine capabilities.
            </p>
            <div className="healthcare-modules">
              <div className="module-item">
                <div className="module-icon">🏥</div>
                <div className="module-content">
                  <h4 className="highlight-blue">Outpatient Management</h4>
                  <p>Complete outpatient care management system</p>
                </div>
              </div>
              <div className="module-item">
                <div className="module-icon">🛏️</div>
                <div className="module-content">
                  <h4 className="highlight-cyan">Inpatient Care</h4>
                  <p>Comprehensive inpatient management and monitoring</p>
                </div>
              </div>
              <div className="module-item">
                <div className="module-icon">💊</div>
                <div className="module-content">
                  <h4 className="highlight-red">Pharmacy Management</h4>
                  <p>Complete pharmacy inventory and dispensing system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Technology Services text left, image right */}
      <section className="flow-section technology-services-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Technology <span className="highlight-red">Services</span></h2>
            <p className="technology-text">
              We provide comprehensive technology services including <span className="highlight-blue">web development</span>, 
              <span className="highlight-cyan">mobile app development</span>, <span className="highlight-red">business integration</span>, 
              and <span className="highlight-blue">consulting services</span>.
            </p>
            <div className="tech-services-grid">
              <div className="tech-service-card">
                <div className="tech-icon">🌐</div>
                <h3 className="highlight-blue">Web Development</h3>
                <p>Custom web applications and platforms</p>
              </div>
              <div className="tech-service-card">
                <div className="tech-icon">📱</div>
                <h3 className="highlight-cyan">Mobile Development</h3>
                <p>iOS and Android mobile applications</p>
              </div>
              <div className="tech-service-card">
                <div className="tech-icon">🔗</div>
                <h3 className="highlight-red">System Integration</h3>
                <p>Business and systems integration solutions</p>
              </div>
              <div className="tech-service-card">
                <div className="tech-icon">💼</div>
                <h3 className="highlight-blue">Consulting</h3>
                <p>Specialized consulting and advisory services</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Web app development.png" 
                alt="Let'sPay Technology Services" 
                className="section-image"
              />
              <h3>Technology Services</h3>
              <p>Comprehensive IT Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - AI & Business Intelligence text right, image left */}
      <section className="flow-section ai-services-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/solution.png" 
                alt="Let'sPay AI and Business Intelligence" 
                className="section-image"
              />
              <h3>AI & Business Intelligence</h3>
              <p>Advanced Analytics Solutions</p>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">AI & Business <span className="highlight-blue">Intelligence</span></h2>
            <p className="ai-text">
              Our systems include <span className="highlight-cyan">Business Intelligence & AI</span> 
              capabilities for predictive analytics, risk assessment, and automated decision making. 
              We leverage artificial intelligence to enhance security and improve operational efficiency.
            </p>
            <div className="ai-features">
              <div className="ai-feature">
                <div className="ai-icon">🤖</div>
                <div className="ai-content">
                  <h4 className="highlight-red">Predictive Analytics</h4>
                  <p>AI-powered predictive modeling for business insights</p>
                </div>
              </div>
              <div className="ai-feature">
                <div className="ai-icon">🔒</div>
                <div className="ai-content">
                  <h4 className="highlight-blue">Security Intelligence</h4>
                  <p>AI-driven security monitoring and threat detection</p>
                </div>
              </div>
              <div className="ai-feature">
                <div className="ai-icon">📊</div>
                <div className="ai-content">
                  <h4 className="highlight-cyan">Real-time Reports</h4>
                  <p>Automated reporting and business intelligence dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;