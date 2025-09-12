import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* First Section - Intro text left, logo right */}
      <section className="flow-section intro-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">About Let's Pay</h1>
            <p className="intro-text">
              Let's Pay is an international private limited company with a presence in Kenya. 
              Let's Pay was formed in 2009 by professionals from the card payment domain, 
              the technology and banking domain, who share a common vision to implement a 
              secure payment platform system, targeting the global market. Let's Pay also 
              focuses on emerging mobile technology offers secure electronic payment services 
              using a mobile application (mobile app) for facilitating various payments like 
              collecting and managing revenues, bill payments, etc., through Account/Wallet/Card. 
              Let's Pay is a tier one bank core system used across all continents of the world.
            </p>
            <p className="trademark-text">
              Let's Pay is an international trademark brand also registered in KENYA.
            </p>
          </div>
          <div className="image-content">
            <div className="logo-display">
              <img 
                src="/letspay-logo.png" 
                alt="Let'sPay - Integrated Financial Management System" 
                className="home-logo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Holistic platform text right, placeholder image left */}
      <section className="flow-section platform-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🌐</div>
                <h3>Global Platform</h3>
                <p>Secure & Reliable</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Holistic Platform</h2>
            <p className="platform-text">
              Let'sPay is a Web & mobility-based platform, targeted towards facilitating 
              Government Departments to collect and manage revenue payments more seamlessly 
              & conveniently. This is a holistic platform, which facilitates the collection 
              of payments using Cash, Debit, and credit Cards & Mobile Wallets and direct 
              bank deposit from consumers and also supports other ERP modules like Human 
              Resource Management, Electronic Document Management, Case Management, Fleet 
              Management, Licenses, Property & Land Rates. Let'sPay is a real time system, 
              with secure audit trails, automatic reports, and self-reconciling without 
              human intervention. It is the most secure and customized system in Kenya. 
              It is a tier one banking core system currently used by banks, financial 
              institutions, insurance companies, and governments across all continents 
              of the world. It has been used in Kenya with great success.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section - Experience text left, placeholder image right */}
      <section className="flow-section experience-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Our Experience</h2>
            <div className="experience-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Man-years of experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Global</span>
                <span className="stat-label">Continental presence</span>
              </div>
            </div>
            <p className="experience-text">
              A pool of human minds with deep-rooted knowledge across multiple industry verticals. 
              Work with you end-to-end. Stay till the end to ensure you get the objectives fulfilled. 
              Hands-on approach. Secure Robust Platform. The platform is already used in Banks for Payment. 
              System used internationally by leading banks, governments, and corporates. The System has 
              a mobile App for both Android & IOS. This is an ERP for Integrated Financial Management.
            </p>
          </div>
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">💼</div>
                <h3>Professional Expertise</h3>
                <p>1000+ Man Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Technology features text right, placeholder image left */}
      <section className="flow-section technology-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">⚡</div>
                <h3>Real-Time Technology</h3>
                <p>AI & Business Intelligence</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Technology Features</h2>
            <div className="feature-list">
              <div className="feature-item">Real Audit Trial</div>
              <div className="feature-item">Real-Time Actionable Reports</div>
              <div className="feature-item">Remote Payment</div>
              <div className="feature-item">GPS Tagged Payments</div>
              <div className="feature-item">Multiple methods of payment</div>
              <div className="feature-item">Systems include Business Intelligence & AI</div>
            </div>
            <p className="technology-text">
              Our system issues a printed, emailed, or e-receipt for every transaction. 
              All reports on the single window. Cost-effective. Real-time processing with 
              automatic reconciliation without human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Fifth Section - Industries text left, placeholder image right */}
      <section className="flow-section industries-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Industries We Serve</h2>
            <div className="industries-list">
              <div className="industry-item">Banking, Finance, and Insurance Industries</div>
              <div className="industry-item">Medical & Health Solutions</div>
              <div className="industry-item">Energy Systems & Equipment</div>
              <div className="industry-item">ICT Networks, Integration, Design, and Installations</div>
              <div className="industry-item">Security Design, Consultancy, Installation, Risk & Threat Analysis</div>
              <div className="industry-item">Civil, Mechanical, Electrical, and Electronic Engineering integration systems</div>
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
          </div>
        </div>
      </section>

      {/* Sixth Section - Contact info text right, placeholder image left */}
      <section className="flow-section contact-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">📞</div>
                <h3>24/7 Support</h3>
                <p>Always Available</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Address:</strong> P.O. BOX 64690-0060, NAIROBI, KENYA
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +254 722 520 906 / +254 720 22 66 66
              </div>
              <div className="contact-item">
                <strong>Email:</strong> btheuri@letspayltd.com
              </div>
              <div className="contact-item">
                <strong>Website:</strong> www.letspayltd.com
              </div>
            </div>
            <p className="contact-text">
              Our commitment and sincerity of service engineers is something to be experienced. 
              Let's Pay support services are extended through the Customer Support Centre 24/7 
              help desk support team to support customers from different time zones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
