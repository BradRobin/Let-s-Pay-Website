import React from 'react';
import LearnMoreButton from '../components/LearnMoreButton';
import './Clients.css';

const Clients = () => {
  return (
    <div className="clients">
      {/* First Section - Industries we serve text left, placeholder image right */}
      <section className="flow-section industries-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Industries We <span className="highlight-blue">Serve</span></h1>
            <div className="info-block">
              <p className="intro-text">
                <span className="highlight-cyan"><span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> LTD</span> is a high technology company involved in the development, 
                design, and customization of secure management systems serving the following industries:
              </p>
            </div>
            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-icon">🏦</div>
                <h3 className="highlight-blue">Banking, Finance, and Insurance Industries</h3>
                <p>Tier one bank core system implementation across multiple continents</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏥</div>
                <h3 className="highlight-cyan">Medical & Health Solutions</h3>
                <p>Hospital Management Information Systems and telemedicine platforms</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">⚡</div>
                <h3 className="highlight-red">Energy Systems & Equipment</h3>
                <p>Smart grid solutions and intelligent power transmission systems</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🌐</div>
                <h3 className="highlight-blue">ICT Networks, Integration, Design, and Installations</h3>
                <p>Comprehensive ICT solutions including network design and integration</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🏢</div>
                <h3>Multi-Industry</h3>
                <p>Comprehensive Solutions</p>
              </div>
            </div>
            <LearnMoreButton
              title="Multi-Industry Solutions"
              description="We serve diverse industries including Banking & Finance, Healthcare, Energy Systems, and ICT Networks. Our comprehensive solutions cover payment processing, enterprise resource planning, and specialized industry requirements with proven implementations across multiple continents."
              ctaText="Explore Industries"
              ctaLink="/clients"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Additional industries text right, placeholder image left */}
      <section className="flow-section additional-industries-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🔒</div>
                <h3>Security & Engineering</h3>
                <p>Advanced Solutions</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Specialized <span className="highlight-cyan">Solutions</span></h2>
            <div className="specialized-industries">
              <div className="specialized-card">
                <div className="specialized-icon">🛡️</div>
                <h3 className="highlight-red">Security Design, Consultancy, Installation, Risk & Threat Analysis</h3>
                <p>Comprehensive security solutions with advanced threat analysis capabilities</p>
              </div>
              <div className="specialized-card">
                <div className="specialized-icon">🖨️</div>
                <h3 className="highlight-blue">Security Printing</h3>
                <p>High-security document printing and anti-counterfeiting solutions</p>
              </div>
              <div className="specialized-card">
                <div className="specialized-icon">⚙️</div>
                <h3 className="highlight-cyan">Civil, Mechanical, Electrical, and Electronic Engineering integration systems</h3>
                <p>Integrated engineering solutions across multiple disciplines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Client solutions text left, placeholder image right */}
      <section className="flow-section solutions-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Client <span className="highlight-red">Solutions</span></h2>
            <div className="info-block">
              <p className="solutions-text">
                <span className="highlight-blue">IT solutions provider</span> for Financial & Enterprise 
                verticals. Have comprehensive & emerging technology-based products for the 
                <span className="highlight-cyan"> Payment, Health & HR domains</span>.
              </p>
            </div>
            <div className="solutions-list">
              <div className="solution-item">
                <div className="solution-icon">💻</div>
                <div className="solution-content">
                  <h3 className="highlight-blue">Software Solutions</h3>
                  <p>Software solution to address end-to-end business requirements and meet the needs of customers</p>
                </div>
              </div>
              <div className="solution-item">
                <div className="solution-icon">🤝</div>
                <div className="solution-content">
                  <h3 className="highlight-cyan">Payment Associations</h3>
                  <p>Consultation on handling payment associations like VISA and Mastercard operations</p>
                </div>
              </div>
              <div className="solution-item">
                <div className="solution-icon">🔧</div>
                <div className="solution-content">
                  <h3 className="highlight-red">Testing & Implementation</h3>
                  <p>Testing of Payment Delivery Channels like ATM, POS, HMIS, etc.</p>
                </div>
              </div>
              <div className="solution-item">
                <div className="solution-icon">👥</div>
                <div className="solution-content">
                  <h3 className="highlight-blue">Staffing Solutions</h3>
                  <p>Staffing Solution for offshore & onsite projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Cutting-edge Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Global presence text right, placeholder image left */}
      <section className="flow-section global-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🌍</div>
                <h3>Global Reach</h3>
                <p>Worldwide Presence</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Global <span className="highlight-cyan">Presence</span></h2>
            <div className="global-stats">
              <div className="global-stat">
                <span className="stat-number highlight-red">1000+</span>
                <span className="stat-label">Man Years of Experience</span>
              </div>
              <div className="global-stat">
                <span className="stat-number highlight-blue">Global</span>
                <span className="stat-label">Continental Coverage</span>
              </div>
            </div>
            <div className="info-block">
              <p className="global-text">
                Have nearly <span className="highlight-red">1000 Man Years</span> of experience across 
                payment and enterprise domains. A pool of human minds with deep-rooted knowledge across 
                multiple industry verticals. Work with you end-to-end. Stay till the end to ensure you 
                get the objectives fulfilled.
              </p>
            </div>
            <div className="global-features">
              <div className="global-feature">Hands-on approach</div>
              <div className="global-feature">Secure Robust Platform</div>
              <div className="global-feature">System used internationally by leading banks, governments, and corporates</div>
              <div className="global-feature">Mobile App for both Android & iOS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Client testimonials text left, placeholder image right */}
      <section className="flow-section testimonials-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Client <span className="highlight-red">Testimonials</span></h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"<span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> has revolutionized our payment processing capabilities. Their secure and reliable platform has significantly improved our operational efficiency."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="highlight-blue">Banking Executive</h4>
                    <span>International Bank</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"The HMIS solution provided by <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> has transformed our healthcare delivery. The unified patient records system is exceptional."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="highlight-cyan">Hospital Administrator</h4>
                    <span>Regional Medical Center</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Their 24/7 support and technical expertise have been invaluable. <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> truly understands our business requirements."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="highlight-red">Government Official</h4>
                    <span>County Government</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img 
              src="/images/Happy customers.png" 
              alt="Let's Pay Happy Customers - Institutional Trust and Customer Satisfaction Across Government, Healthcare, and Educational Organizations Including Ministry of Youth Sports Arts Recreation Zimbabwe, Amref Health Africa, Evans Sunrise Medical Centre" 
              className="client-success-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
